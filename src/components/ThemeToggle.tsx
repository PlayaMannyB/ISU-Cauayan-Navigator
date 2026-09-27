import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export function ThemeToggle({ className = '' }: {className?: string;}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint backdrop-blur-md
        ${isDark ? 'bg-isu-charcoal-light/90 text-isu-mint shadow-glow-mint border border-isu-mint/30' : 'bg-white/90 text-isu-green shadow-sm border border-white/60'} ${className}`}>
      
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
          strokeWidth={2.5} />
        
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
          strokeWidth={2.5} />
        
      </div>
    </button>);

}