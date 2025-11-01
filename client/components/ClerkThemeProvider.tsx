'use client';

import { useResumeStore } from '@/lib/store';
import { clerkAppearance, clerkDarkAppearance } from '@/lib/clerk-theme';
import { useMemo } from 'react';

export function useClerkTheme() {
  const { theme } = useResumeStore();
  
  const appearance = useMemo(() => {
    return theme === 'dark' ? clerkDarkAppearance : clerkAppearance;
  }, [theme]);

  return appearance;
}
