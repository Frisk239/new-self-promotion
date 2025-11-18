'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    console.log('当前主题:', resolvedTheme);
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    console.log('切换到:', newTheme);
    setTheme(newTheme);
  };

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div
      className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
      onClick={toggleTheme}
      title={isDarkMode ? '切换到日间模式' : '切换到夜间模式'}
    >
      {isDarkMode ? (
        <Moon size={20} className="text-blue-400 hover:text-blue-300" />
      ) : (
        <Sun size={20} className="text-yellow-500 hover:text-yellow-400" />
      )}
    </div>
  );
};

export default ThemeToggle;