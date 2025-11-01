'use client';

import { useState, useRef } from 'react';
import { Upload, FileText, Loader2, Image, FileCheck } from 'lucide-react';
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

  const ACCEPTED_TYPES = {
    'application/pdf': ['.pdf'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    'application/msword': ['.doc'],
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/webp': ['.webp'],
  };

  const isValidFileType = (file: File): boolean => {
    const validTypes = Object.keys(ACCEPTED_TYPES);
    return validTypes.some(type => file.type === type);
  };

  const handleFile = async (file: File) => {
    // Validate file type
    if (!isValidFileType(file)) {
      toast.error('Please upload a PDF, DOCX, or image file (PNG, JPG, WEBP)');
      return;
    }

    // Validate file size (10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      toast.error('File size must be less than 10MB');
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
          accept=".pdf,.docx,.doc,.png,.jpg,.jpeg,.webp"
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
              Supports PDF, DOCX, and images (PNG, JPG, WEBP)
            </p>
          </div>

          {!isUploading && (
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-background px-3 py-2 rounded-lg">
                <FileText className="w-4 h-4 text-primary" />
                <span>PDF</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-background px-3 py-2 rounded-lg">
                <FileCheck className="w-4 h-4 text-primary" />
                <span>DOCX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-background px-3 py-2 rounded-lg">
                <Image className="w-4 h-4 text-primary" />
                <span>Images</span>
              </div>
            </div>
          )}

          {!isUploading && (
            <p className="text-xs text-muted-foreground mt-2">
              Max file size: 10MB
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
