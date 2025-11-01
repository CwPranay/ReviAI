'use client';

import { motion } from 'framer-motion';
import UploadCard from '@/components/UploadCard';
import Breadcrumb from '@/components/Breadcrumb';

export default function UploadPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col px-4 py-8">
      <div className="max-w-7xl mx-auto w-full">
        <Breadcrumb />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Upload Your Resume</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload your existing resume to start editing with AI
          </p>
        </motion.div>

        <UploadCard />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Don't have a resume yet?
          </p>
          <button className="text-primary hover:underline font-medium">
            Start from scratch
          </button>
        </motion.div>
      </div>
    </div>
  );
}
