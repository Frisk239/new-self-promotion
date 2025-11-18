import React from 'react';
import GlowCard from './GlowCard';

interface TerminalCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  showControls?: boolean;
  glowColor?: 'violet' | 'pink' | 'green' | 'blue';
}

const TerminalCard: React.FC<TerminalCardProps> = ({
  children,
  title,
  className = '',
  showControls = true,
  glowColor = 'violet'
}) => {
  return (
    <GlowCard
      className={`terminal-card ${className}`}
      glowColor={glowColor}
    >
      {/* 终端控制栏 */}
      {showControls && (
        <div className="terminal-controls">
          <div className="flex gap-2">
            <div className="control-dot red"></div>
            <div className="control-dot yellow"></div>
            <div className="control-dot green"></div>
          </div>
          {title && (
            <div className="ml-auto text-sm text-gray-400 font-mono">
              {title}
            </div>
          )}
        </div>
      )}

      {/* 内容区域 */}
      <div className="p-6">
        {children}
      </div>
    </GlowCard>
  );
};

export default TerminalCard;