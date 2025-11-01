'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import EditorPanel from '@/components/EditorPanel';
import ResumePreview from '@/components/ResumePreview';
import Breadcrumb from '@/components/Breadcrumb';
import { useResumeStore } from '@/lib/store';
import toast from 'react-hot-toast';

export default function EditorPage() {
  const router = useRouter();
  const { resume } = useResumeStore();

  useEffect(() => {
    if (!resume) {
      // Mock resume data for development
      const mockResume = {
        id: 'mock-123',
        personalInfo: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '+1 (555) 123-4567',
          location: 'San Francisco, CA',
          linkedin: 'https://linkedin.com/in/johndoe',
          website: 'https://johndoe.com',
        },
        summary: 'Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about building scalable applications and leading technical teams.',
        experience: [
          {
            id: '1',
            company: 'Tech Corp',
            position: 'Senior Software Engineer',
            location: 'San Francisco, CA',
            startDate: '2021-01',
            endDate: 'Present',
            description: [
              'Led development of microservices architecture serving 1M+ users',
              'Mentored team of 5 junior developers',
              'Reduced API response time by 40% through optimization',
            ],
          },
          {
            id: '2',
            company: 'StartupXYZ',
            position: 'Full Stack Developer',
            location: 'Remote',
            startDate: '2019-06',
            endDate: '2020-12',
            description: [
              'Built responsive web applications using React and Node.js',
              'Implemented CI/CD pipelines reducing deployment time by 60%',
              'Collaborated with design team to improve UX',
            ],
          },
        ],
        education: [
          {
            id: '1',
            institution: 'University of California',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: '2015-09',
            endDate: '2019-05',
            gpa: '3.8',
          },
        ],
        skills: [
          'JavaScript',
          'TypeScript',
          'React',
          'Node.js',
          'Python',
          'AWS',
          'Docker',
          'PostgreSQL',
          'MongoDB',
          'Git',
        ],
        certifications: [
          'AWS Certified Solutions Architect',
          'Google Cloud Professional',
        ],
        theme: 'professional',
      };
      useResumeStore.getState().setResume(mockResume);
    }
  }, [resume]);

  const handleExport = () => {
    toast.success('Export feature coming soon!');
  };

  const handlePreview = () => {
    router.push('/preview');
  };

  return (
    <div className="h-[calc(100vh-4rem)] p-4 md:p-6">
      <div className="max-w-[1800px] mx-auto h-full flex flex-col">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-6"
        >
          <div>
            <h1 className="text-2xl font-bold">Resume Editor</h1>
            <p className="text-sm text-muted-foreground">
              Use AI commands to edit your resume
            </p>
          </div>
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePreview}
              className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors flex items-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExport}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden"
        >
          {/* Left Panel - Editor */}
          <div className="h-full overflow-hidden">
            <EditorPanel />
          </div>

          {/* Right Panel - Preview */}
          <div className="h-full overflow-hidden hidden lg:block">
            <ResumePreview />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
