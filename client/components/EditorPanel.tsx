'use client';

import { useState } from 'react';
import { Clock, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CommandInput from './CommandInput';
import { useResumeStore } from '@/lib/store';
import { editResume } from '@/lib/api';
import { generateId } from '@/lib/utils';
import toast from 'react-hot-toast';

export default function EditorPanel() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { resume, editHistory, addEdit, updateEditStatus, setResume } = useResumeStore();

  const handleCommand = async (command: string) => {
    if (!resume?.id) {
      toast.error('No resume loaded');
      return;
    }

    const editId = generateId();
    addEdit({
      id: editId,
      command,
      timestamp: new Date(),
      status: 'pending',
    });

    setIsProcessing(true);
    try {
      const response = await editResume(resume.id, command);
      if (response.success && response.data) {
        setResume(response.data);
        updateEditStatus(editId, 'applied');
        toast.success('Changes applied successfully!');
      } else {
        updateEditStatus(editId, 'failed');
        toast.error('Failed to apply changes');
      }
    } catch (error) {
      updateEditStatus(editId, 'failed');
      toast.error('An error occurred');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <CheckCircle className="w-4 h-4 text-accent" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Loader2 className="w-4 h-4 text-primary animate-spin" />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-card rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-semibold mb-4">AI Command Center</h2>
        <CommandInput onSubmit={handleCommand} isLoading={isProcessing} />
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Edit History
        </h3>
        
        <AnimatePresence>
          {editHistory.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              No edits yet. Start by typing a command above.
            </p>
          ) : (
            <div className="space-y-3">
              {[...editHistory].reverse().map((edit) => (
                <motion.div
                  key={edit.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="p-4 bg-background rounded-lg border border-border"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm flex-1">{edit.command}</p>
                    {getStatusIcon(edit.status)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(edit.timestamp).toLocaleTimeString()}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
