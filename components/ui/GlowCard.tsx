'use client';

import React, { useRef, useState } from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  identifier?: string;
  glowColor?: 'violet' | 'pink' | 'green' | 'blue';
  intensity?: 'low' | 'medium' | 'high';
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  identifier = 'default',
  glowColor = 'violet',
  intensity = 'medium'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // 获取发光颜色
  const getGlowColor = () => {
    switch (glowColor) {
      case 'violet':
        return 'rgba(139, 92, 246, ';
      case 'pink':
        return 'rgba(236, 72, 153, ';
      case 'green':
        return 'rgba(22, 242, 179, ';
      case 'blue':
        return 'rgba(59, 130, 246, ';
      default:
        return 'rgba(139, 92, 246, ';
    }
  };

  // 获取发光强度
  const getGlowIntensity = () => {
    switch (intensity) {
      case 'low':
        return isHovered ? 0.15 : 0.05;
      case 'medium':
        return isHovered ? 0.25 : 0.1;
      case 'high':
        return isHovered ? 0.35 : 0.15;
      default:
        return isHovered ? 0.25 : 0.1;
    }
  };

  // 计算光晕位置
  const calculateGlowPosition = () => {
    if (!cardRef.current || !isHovered) return { x: 50, y: 50 };

    const rect = cardRef.current.getBoundingClientRect();
    const xPercent = (mousePosition.x / rect.width) * 100;
    const yPercent = (mousePosition.y / rect.height) * 100;

    return { x: xPercent, y: yPercent };
  };

  const glowPosition = calculateGlowPosition();
  const glowColorValue = getGlowColor();
  const glowOpacity = getGlowIntensity();

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl border border-[#2a2e5a] bg-[#101123] transition-all duration-300 hover:border-opacity-50 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--glow-color': `${glowColorValue}${glowOpacity})`,
        '--glow-position-x': `${glowPosition.x}%`,
        '--glow-position-y': `${glowPosition.y}%`,
      } as React.CSSProperties}
    >
      {/* 背景光晕效果 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            600px circle at ${glowPosition.x}% ${glowPosition.y}%,
            ${glowColorValue}${glowOpacity}) 0%,
            transparent 40%
          )`,
          filter: 'blur(40px)',
        }}
      />

      {/* 顶部渐变边框 */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.5), transparent)',
        }}
      />

      {/* 内容 */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* 悬停时的细微发光效果 */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? `0 0 40px ${glowColorValue}${glowOpacity})`
            : 'none',
        }}
      />
    </div>
  );
};

export default GlowCard;