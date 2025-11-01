'use client';

import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CommandInputProps {
  onSubmit: (command: string) => void;
  isLoading?: boolean;
}

export default function CommandInput({ onSubmit, isLoading }: CommandInputProps) {
  const [command, setCommand] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() && !isLoading) {
      onSubmit(command.trim());
      setCommand('');
    }
  };

  const suggestions = [
    'Add Python to skills',
    'Update job title to Senior Developer',
    'Add a new certification',
    'Improve summary section',
  ];

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center space-x-2 bg-card border border-border rounded-xl p-3 shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
          <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Tell AI what to change... (e.g., 'Add React to skills')"
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!command.trim() || isLoading}
            className="p-2 rounded-lg bg-primary text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setCommand(suggestion)}
            className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg hover:border-primary transition-colors text-muted-foreground hover:text-foreground"
          >
            {suggestion}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
