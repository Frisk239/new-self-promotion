'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import TerminalCard from '@/components/ui/TerminalCard';
import Button from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const router = useRouter();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long'
    });
  };

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div onClick={handleCardClick} className={`cursor-pointer ${className}`}>
      <TerminalCard
        title={`${project.name.toLowerCase().replace(/\s+/g, '-')}.js`}
        glowColor="violet"
        className="hover-glow hover-lift"
      >
      <div className="space-y-6">
        {/* 项目头部信息 - 代码风格 */}
        <div className="font-mono text-sm">
          <span className="text-gray-400">const </span>
          <span className="text-blue-400">project</span>
          <span className="text-gray-400"> = {`{`}</span>
          <div className="ml-4 space-y-1">
            <div className="text-gray-400">
              <span className="text-pink-400">name:</span>
              <span className="text-green-400"> "{project.name}",</span>
            </div>
            <div className="text-gray-400">
              <span className="text-pink-400">role:</span>
              <span className="text-green-400"> "{project.role}",</span>
            </div>
            <div className="text-gray-400">
              <span className="text-pink-400">period:</span>
              <span className="text-green-400"> "{formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : '进行中'}",</span>
            </div>
          </div>
          <span className="text-gray-400">{`};`}</span>
        </div>

        {/* 项目截图 */}
        {project.screenshots.length > 0 && (
          <div className="relative group">
            <div className="overflow-hidden rounded-lg border border-[#2a2e5a]">
              <Image
                src={project.screenshots[0]}
                alt={`${project.name} 截图`}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {project.screenshots.length > 1 && (
              <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                +{project.screenshots.length - 1} 张截图
              </div>
            )}
          </div>
        )}

        {/* 项目描述 */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">
            {project.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* 技术栈标签 */}
        <div className="space-y-2">
          <div className="text-gray-400 text-sm">
            <span className="text-pink-400">tools:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#1a1f3a] border border-[#2a2e5a] rounded-full text-xs text-gray-300 hover:border-violet-500 hover:text-white transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-3 pt-4 border-t border-[#2a2e5a]">
          {project.codeUrl && (
            <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="flex-1">
                查看代码
              </Button>
            </Link>
          )}
          {project.demoUrl && (
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="flex-1">
                在线演示
              </Button>
            </Link>
          )}
          {!project.codeUrl && !project.demoUrl && (
            <Button variant="outline" size="sm" className="flex-1" disabled>
              暂未开放
            </Button>
          )}
        </div>
      </div>
      </TerminalCard>
    </div>
  );
};

export default ProjectCard;