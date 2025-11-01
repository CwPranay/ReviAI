'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield } from 'lucide-react';
import { useAuth, SignInButton } from '@clerk/nextjs';
import { useClerkTheme } from '@/components/ClerkThemeProvider';

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const clerkAppearance = useClerkTheme();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/upload');
    }
    // If not signed in, the SignInButton will handle showing the modal
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background to-blue-50 dark:to-blue-950/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl"
        >
          <Sparkles className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          ReviAI
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transform your resume with AI-powered editing. Upload once, edit with natural language commands.
        </p>

        {isSignedIn ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </motion.button>
        ) : (
          <SignInButton mode="modal" appearance={clerkAppearance}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </motion.button>
          </SignInButton>
        )}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: Sparkles,
              title: 'AI-Powered',
              description: 'Use natural language to edit any section of your resume',
            },
            {
              icon: Zap,
              title: 'Lightning Fast',
              description: 'Make changes in seconds, not hours',
            },
            {
              icon: Shield,
              title: 'Theme Preserved',
              description: 'Your resume layout stays intact while content updates',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border shadow-sm"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
