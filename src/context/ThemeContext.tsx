import React, { useEffect, useState, createContext, useContext } from 'react';
type Theme = 'light' | 'dark';
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
export function ThemeProvider({ children }: {children: React.ReactNode;}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('isu-theme') as Theme | null;
    return saved || 'light';
  });
  useEffect(() => {
    localStorage.setItem('isu-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const toggleTheme = () =>
  setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}>
      
      <div
        className={theme === 'dark' ? 'dark' : ''}
        style={{
          display: 'contents'
        }}>
        
        {children}
      </div>
    </ThemeContext.Provider>);

}
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}