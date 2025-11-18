'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { techStack } from '@/data/constants';
import GlowCard from '@/components/ui/GlowCard';

const Skills: React.FC = () => {
  // 复制技术栈数组以实现无缝轮播
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1224]/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            技术栈
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            掌握多种编程语言和开发框架，专注于全栈开发和AI应用
          </p>
        </div>

        {/* 技术栈轮播 */}
        <div className="relative">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            direction="left"
            className="py-4"
          >
            {duplicatedStack.map((tech, index) => (
              <GlowCard
                key={`${tech.name}-${index}`}
                className="mx-4 min-w-[140px] max-w-[140px] h-[140px] flex flex-col items-center justify-center cursor-pointer hover:scale-[1.15] transition-all duration-500"
                glowColor="violet"
                intensity="medium"
              >
                <div className="text-center">
                  {/* 技术图标 */}
                  <div className="text-3xl mb-2">
                    {getTechIcon(tech.icon)}
                  </div>
                  {/* 技术名称 */}
                  <span className="text-sm font-medium text-white">
                    {tech.name}
                  </span>
                </div>
              </GlowCard>
            ))}
          </Marquee>
        </div>

        {/* 分类标签 */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          {getSkillCategories().map((category) => (
            <div
              key={category.name}
              className="px-6 py-3 bg-[#1a1f3a] border border-[#2a2e5a] rounded-full text-gray-300 hover:border-violet-500 hover:text-white transition-all duration-300"
            >
              <span className="text-sm font-medium">{category.name}</span>
              <span className="ml-2 text-xs text-gray-400">({category.count})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 获取技术图标
const getTechIcon = (iconName: string) => {
  // 这里使用emoji作为图标占位符，实际项目中可以使用图标库
  const iconMap: Record<string, string> = {
    'file-type-python': '🐍',
    'file-type-js': '📜',
    'file-type-typescript-official': '📘',
    'file-type-reactjs': '⚛️',
    'file-type-next': '▲',
    'file-type-vue': '💚',
    'file-type-nodejs': '🟢',
    'file-type-html': '🌐',
    'file-type-css': '🎨',
    'file-type-tailwind': '🌊',
    'file-type-sass': '🔷',
    'file-type-mysql': '🗄️',
    'file-type-mongo': '🍃',
    'file-type-git': '📦',
    'file-type-docker': '🐳',
    'file-type-linux': '🐧',
    'file-type-tensorflow': '🧠',
    'file-type-pytorch': '🔥',
    'file-type-scss': '🔷',
    'file-type-py': '🐍'
  };

  return iconMap[iconName] || '💻';
};

// 获取技能分类
const getSkillCategories = () => [
  { name: '前端开发', count: 8 },
  { name: '后端开发', count: 6 },
  { name: '数据科学', count: 6 },
  { name: '开发工具', count: 4 }
];

export default Skills;