'use client';

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieJSProps {
  className?: string;
  width?: number;
  height?: number;
}

export const LottieJS: React.FC<LottieJSProps> = ({
  className = '',
  width = 200,
  height = 200,
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/static/lottie/js.json');
        if (!response.ok) {
          throw new Error('Failed to load js animation');
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading js animation:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnimation();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="text-center">
          <div className="text-3xl mb-1">⚡</div>
          <p className="text-gray-400 text-xs">JS动画</p>
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