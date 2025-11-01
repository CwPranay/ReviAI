'use client';

import { useState, useRef } from 'react';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { uploadResume } from '@/lib/api';
import { useResumeStore } from '@/lib/store';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function UploadCard() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setResume } = useResumeStore();
  const router = useRouter();

  const handleFile = async (file: File) => {
    if (!file.type.includes('pdf') && !file.type.includes('json')) {
      toast.error('Please upload a PDF or JSON file');
      return;
    }

    setIsUploading(true);
    try {
      const response = await uploadResume(file);
      if (response.success && response.data) {
        setResume(response.data);
        toast.success('Resume uploaded successfully!');
        setTimeout(() => router.push('/editor'), 500);
      }
    } catch (error) {
      toast.error('Failed to upload resume. Please try again.');
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !isUploading && fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
          transition-all duration-300 bg-card shadow-lg
          ${isDragging ? 'border-primary bg-blue-50/50 dark:bg-blue-950/20' : 'border-border hover:border-primary'}
          ${isUploading ? 'pointer-events-none opacity-60' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.json"
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="flex flex-col items-center space-y-4">
          {isUploading ? (
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Upload className="w-8 h-8 text-white" />
            </div>
          )}
          
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {isUploading ? 'Uploading...' : 'Upload Your Resume'}
            </h3>
            <p className="text-muted-foreground mb-4">
              Drag and drop or click to browse
            </p>
            <p className="text-sm text-muted-foreground">
              Supports PDF and JSON formats
            </p>
          </div>

          {!isUploading && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>Max file size: 10MB</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
