'use client';

import { motion } from 'framer-motion';
import { useAuth, SignInButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import UploadCard from '@/components/UploadCard';
import Breadcrumb from '@/components/Breadcrumb';
import { useClerkTheme } from '@/components/ClerkThemeProvider';
import { Loader2 } from 'lucide-react';

export default function UploadPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const clerkAppearance = useClerkTheme();

  // Show loading while checking auth
  if (!isLoaded) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  // If not signed in, show sign-in prompt
  if (!isSignedIn) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
            <span className="text-3xl">🔒</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
          <p className="text-muted-foreground mb-8">
            Please sign in to upload and edit your resume with AI
          </p>
          <SignInButton mode="modal" appearance={clerkAppearance}>
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg">
              Sign In to Continue
            </button>
          </SignInButton>
        </motion.div>
      </div>
    );
  }

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
