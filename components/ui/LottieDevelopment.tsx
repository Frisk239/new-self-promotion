'use client';

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieDevelopmentProps {
  className?: string;
  width?: number;
  height?: number;
}

export const LottieDevelopment: React.FC<LottieDevelopmentProps> = ({
  className = '',
  width = 220,
  height = 220,
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/static/lottie/development.json');
        if (!response.ok) {
          throw new Error('Failed to load development animation');
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading development animation:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnimation();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="text-center">
          <div className="text-3xl mb-1">⚙️</div>
          <p className="text-gray-400 text-xs">开发动画</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width, height }}
      />
    </div>
  );
};