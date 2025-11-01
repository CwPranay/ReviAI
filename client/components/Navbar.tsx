'use client';

import { Moon, Sun } from 'lucide-react';
import { useResumeStore } from '@/lib/store';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { useEffect } from 'react';
import { useClerkTheme } from './ClerkThemeProvider';

export default function Navbar() {
  const { theme, toggleTheme } = useResumeStore();
  const clerkAppearance = useClerkTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ---- Logo ---- */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ReviAI
            </span>
          </div>

          {/* ---- Right section (theme + auth) ---- */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-background transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-muted-foreground" />
              )}
            </button>

            <SignedOut>
              <SignInButton mode="modal" appearance={clerkAppearance}>
                <button className="border border-primary text-primary rounded-lg font-medium text-sm sm:text-base h-9 sm:h-10 px-3 sm:px-5 cursor-pointer hover:bg-primary hover:text-white transition-all duration-200">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal" appearance={clerkAppearance}>
                <button className="bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium text-sm sm:text-base h-9 sm:h-10 px-3 sm:px-5 cursor-pointer hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton 
                appearance={{
                  ...clerkAppearance,
                  elements: {
                    ...clerkAppearance.elements,
                    avatarBox: "w-9 h-9 sm:w-10 sm:h-10",
                    userButtonPopoverCard: "shadow-xl border border-border",
                    userButtonPopoverActionButton: "hover:bg-background",
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
