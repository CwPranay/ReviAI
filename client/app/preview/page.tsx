'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Download, Printer } from 'lucide-react';
import ResumePreview from '@/components/ResumePreview';
import Breadcrumb from '@/components/Breadcrumb';
import { useResumeStore } from '@/lib/store';
import toast from 'react-hot-toast';

export default function PreviewPage() {
  const router = useRouter();
  const { resume } = useResumeStore();
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    try {
      // Simple HTML to PDF approach using browser print
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const content = document.getElementById('resume-content');
        if (content) {
          printWindow.document.write(`
            <html>
              <head>
                <title>${resume?.personalInfo.name || 'Resume'}</title>
                <style>
                  body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
                  @media print {
                    body { margin: 0; }
                  }
                </style>
              </head>
              <body>${content.innerHTML}</body>
            </html>
          `);
          printWindow.document.close();
          printWindow.print();
        }
      }
      toast.success('Opening print dialog...');
    } catch (error) {
      toast.error('Failed to generate PDF');
      console.error(error);
    }
  };

  if (!resume) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No resume to preview</p>
          <button
            onClick={() => router.push('/upload')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90"
          >
            Upload Resume
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-2xl font-bold">Resume Preview</h1>

          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors flex items-center space-x-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          ref={printRef}
        >
          <ResumePreview />
        </motion.div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          nav, button, .no-print {
            display: none !important;
          }
          #resume-content {
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>
    </div>
  );
}
