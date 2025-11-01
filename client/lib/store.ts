import { create } from 'zustand';
import { Resume, EditCommand } from './types';

interface ResumeStore {
  resume: Resume | null;
  editHistory: EditCommand[];
  theme: 'light' | 'dark';
  setResume: (resume: Resume) => void;
  addEdit: (command: EditCommand) => void;
  updateEditStatus: (id: string, status: EditCommand['status']) => void;
  toggleTheme: () => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: null,
  editHistory: [],
  theme: 'light',
  setResume: (resume) => set({ resume }),
  addEdit: (command) => set((state) => ({ 
    editHistory: [...state.editHistory, command] 
  })),
  updateEditStatus: (id, status) => set((state) => ({
    editHistory: state.editHistory.map(edit => 
      edit.id === id ? { ...edit, status } : edit
    )
  })),
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
}));
