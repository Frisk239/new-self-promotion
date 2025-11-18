'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GlowCard from './GlowCard';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  size = 'md',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  return (
    <div className={`relative ${className}`}>
      <GlowCard
        glowColor="violet"
        intensity="medium"
        className="p-1"
      >
        <div
          className={`relative overflow-hidden rounded-lg ${sizeClasses[size]} transition-all duration-500 ease-in-out cursor-pointer ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-all duration-700 ease-in-out ${
              isHovered
                ? 'grayscale-0 brightness-110 contrast-105'
                : 'grayscale brightness-95'
            }`}
            sizes="(max-width: 768px) 128px, (max-width: 1200px) 192px, 256px"
          />

          {/* 悬停时的光晕效果 */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-pink-600/20 rounded-lg animate-pulse" />
          )}
        </div>
      </GlowCard>

      {/* 装饰性边框 */}
      <div className={`absolute inset-0 rounded-lg border-2 border-violet-500/30 ${sizeClasses[size]} -z-10`} />
      <div className={`absolute inset-0 rounded-lg border border-pink-500/20 ${sizeClasses[size]} translate-x-1 translate-y-1 -z-10`} />
    </div>
  );
};

export default ProfileImage;