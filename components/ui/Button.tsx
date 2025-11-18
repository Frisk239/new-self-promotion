import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0d1224] disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 touch-manipulation';

  const variants = {
    primary: 'bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:from-violet-700 hover:to-pink-700 shadow-lg hover:shadow-xl active:shadow-violet-500/50 focus:ring-violet-500',
    secondary: 'bg-[#1a1f3a] text-white border border-[#2a2e5a] hover:bg-[#2a2e5a] active:bg-[#1a1f3a] active:border-violet-500/50 focus:ring-violet-500',
    outline: 'border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white active:bg-violet-500 active:text-white active:shadow-lg active:shadow-violet-500/30 focus:ring-violet-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-[#1a1f3a] active:text-white active:bg-[#2a2e5a] focus:ring-violet-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;