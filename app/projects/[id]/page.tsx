'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { projects } from '@/data/projects';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TerminalCard from '@/components/ui/TerminalCard';
import Button from '@/components/ui/Button';
import ImageCarousel from '@/components/ui/ImageCarousel';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { ArrowLeft, User, ExternalLink, Github, Play } from 'lucide-react';

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const projectId = resolvedParams.id;

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0d1224]">
      <Header />

      <main className="pt-20">
        {/* 面包屑导航 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeft size={16} />
              返回项目列表
            </Link>
          </div>
        </section>

        {/* 项目标题和基本信息 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <TerminalCard title="project-info.js" glowColor="violet">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 左侧：项目基本信息 */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                      {project.name}
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {/* 项目元信息 */}
                    <div className="flex items-center gap-2 text-gray-300 mb-6">
                      <User size={16} className="text-violet-400" />
                      <span>{project.role}</span>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-3">
                      {project.codeUrl && (
                        <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" size="sm" className="flex-1">
                            <Github size={16} className="mr-2" />
                            源代码
                          </Button>
                        </Link>
                      )}
                      {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="primary" size="sm" className="flex-1">
                            <ExternalLink size={16} className="mr-2" />
                            在线演示
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* 右侧：技术栈 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-4">技术栈</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-sm text-gray-300 hover:border-violet-500 hover:text-white transition-colors duration-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TerminalCard>
          </div>
        </section>

        {/* 项目详细描述 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <TerminalCard title="project-description.md" glowColor="green">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-white mb-4">项目简介</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>
            </TerminalCard>
          </div>
        </section>

        {/* 项目截图轮播 */}
        {project.screenshots.length > 0 && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <TerminalCard title="screenshots.js" glowColor="blue">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">项目截图</h3>
                  <ImageCarousel images={project.screenshots} />
                </div>
              </TerminalCard>
            </div>
          </section>
        )}

        {/* 项目视频播放 */}
        {project.videos && project.videos.length > 0 && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <TerminalCard title="videos.js" glowColor="pink">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Play size={20} className="text-pink-400" />
                    项目演示视频
                  </h3>
                  <div className="space-y-4">
                    {project.videos.map((video, index) => (
                      <div key={index}>
                        <div className="mb-2 text-sm text-gray-400">
                          视频 {index + 1}
                        </div>
                        <VideoPlayer
                          src={video}
                          className="aspect-video w-full max-h-[500px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TerminalCard>
            </div>
          </section>
        )}

        {/* 项目代码示例 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <TerminalCard title="implementation.js" glowColor="violet">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">实现亮点</h3>
                <div className="font-mono text-sm text-gray-300">
                  <div className="text-green-400 mb-2">const features = {`{`}</div>
                  <div className="ml-4 space-y-1">
                    <div>
                      <span className="text-pink-400">type:</span>
                      <span className="text-green-400"> "{project.category}",</span>
                    </div>
                    <div>
                      <span className="text-pink-400">frontend:</span>
                      <span className="text-green-400"> ["React", "Next.js", "Tailwind CSS"],</span>
                    </div>
                    <div>
                      <span className="text-pink-400">backend:</span>
                      <span className="text-green-400"> ["Node.js", "Express"],</span>
                    </div>
                    <div>
                      <span className="text-pink-400">database:</span>
                      <span className="text-green-400"> ["MySQL", "MongoDB"],</span>
                    </div>
                    <div>
                      <span className="text-pink-400">deployed:</span>
                      <span className="text-green-400"> true</span>
                    </div>
                  </div>
                  <div className="text-green-400">{`}`}</div>
                </div>
              </div>
            </TerminalCard>
          </div>
        </section>

        {/* 返回按钮 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <Link href="/projects">
              <Button variant="secondary" size="lg" className="group">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                返回所有项目
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}