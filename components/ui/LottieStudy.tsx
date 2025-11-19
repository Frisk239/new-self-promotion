'use client';

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieStudyProps {
  className?: string;
  width?: number;
  height?: number;
}

export const LottieStudy: React.FC<LottieStudyProps> = ({
  className = '',
  width = 300,
  height = 300,
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/static/lottie/study.json');
        if (!response.ok) {
          throw new Error('Failed to load study animation');
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading study animation:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnimation();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-violet-500"></div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="text-center">
          <div className="text-4xl mb-2">📚</div>
          <p className="text-gray-400 text-sm">学习动画</p>
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