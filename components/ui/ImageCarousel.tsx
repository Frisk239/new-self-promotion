'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 自动轮播
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  // 手动控制
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className={`bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg flex items-center justify-center h-96 ${className}`}>
        <p className="text-gray-400">暂无图片</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* 主图片显示 */}
      <div className="relative overflow-hidden rounded-lg border border-[#2a2e5a] bg-[#1a1f3a]">
        <div className="relative aspect-video">
          <Image
            src={images[currentIndex]}
            alt={`项目截图 ${currentIndex + 1}`}
            fill
            className="object-contain transition-opacity duration-500"
            priority
          />
        </div>

        {/* 左右箭头按钮 */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              aria-label="上一张图片"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              aria-label="下一张图片"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* 图片计数 */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* 缩略图导航 */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? 'border-violet-500 ring-2 ring-violet-500/50'
                  : 'border-[#2a2e5a] hover:border-violet-400'
              }`}
            >
              <Image
                src={image}
                alt={`缩略图 ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-violet-500/20" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* 播放控制 */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-gray-300 hover:border-violet-500 hover:text-white transition-colors duration-200"
          >
            <span>{isPlaying ? '暂停轮播' : '开始轮播'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;