'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import { projectCategories } from '@/data/constants';
import ProjectCard from './ProjectCard';
import Button from '@/components/ui/Button';

const Projects: React.FC = () => {
  const featuredProjects = getFeaturedProjects();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-20 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1224]/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            精选项目
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            展示我最引以为豪的项目作品，涵盖数据分析、Web开发、AI应用等多个领域
          </p>

          {/* 项目分类标签 */}
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.slice(0, 5).map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  hoveredCategory === category.id
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white scale-105'
                    : 'bg-[#1a1f3a] border border-[#2a2e5a] text-gray-300 hover:border-violet-500'
                }`}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 项目卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className="h-full"
            />
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center mt-16">
          <Link href="/projects">
            <Button variant="primary" size="lg" className="group">
              查看所有项目
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </Link>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[#2a2e5a]">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              20+
            </div>
            <div className="text-gray-400 text-sm">
              完成项目
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              15+
            </div>
            <div className="text-gray-400 text-sm">
              技术栈
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              5+
            </div>
            <div className="text-gray-400 text-sm">
              项目领域
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
              2年
            </div>
            <div className="text-gray-400 text-sm">
              开发经验
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;