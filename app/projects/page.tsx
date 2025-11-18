'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/sections/ProjectCard';
import TerminalCard from '@/components/ui/TerminalCard';
import Button from '@/components/ui/Button';
import { projects, getProjectsByCategory } from '@/data/projects';
import { projectCategories } from '@/data/constants';
import { Search, Filter } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 过滤项目
  const filteredProjects = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? projects
      : getProjectsByCategory(selectedCategory);

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tools.some(tool => tool.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-[#0d1224]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              项目展示
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              我的技术作品集，涵盖数据分析、Web开发、AI应用和机器学习等多个领域
            </p>

            {/* 项目统计 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {projects.length}
                </div>
                <div className="text-gray-400 text-sm">总项目数</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {projects.filter(p => p.category === 'data-analysis').length}
                </div>
                <div className="text-gray-400 text-sm">数据分析</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {projects.filter(p => p.category === 'web-development').length}
                </div>
                <div className="text-gray-400 text-sm">Web开发</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {projects.filter(p => p.category === 'ai-application').length}
                </div>
                <div className="text-gray-400 text-sm">AI应用</div>
              </div>
            </div>
          </div>
        </section>

        {/* 筛选和搜索 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <TerminalCard title="filters.js" glowColor="violet">
              <div className="space-y-6">
                {/* 搜索框 */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    <Search size={16} className="inline mr-2" />
                    搜索项目
                  </label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="按项目名称、描述或技术栈搜索..."
                    className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors duration-200"
                  />
                </div>

                {/* 分类筛选 */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    <Filter size={16} className="inline mr-2" />
                    项目分类
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant={selectedCategory === 'all' ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setSelectedCategory('all')}
                    >
                      全部项目 ({projects.length})
                    </Button>
                    {projectCategories.map((category) => {
                      const categoryProjects = getProjectsByCategory(category.id);
                      return (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                          size="sm"
                          onClick={() => setSelectedCategory(category.id)}
                          style={{
                            background: selectedCategory === category.id
                              ? `linear-gradient(135deg, ${category.color}88, ${category.color})`
                              : undefined
                          }}
                        >
                          {category.name} ({categoryProjects.length})
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TerminalCard>
          </div>
        </section>

        {/* 项目网格 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className="h-full"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <TerminalCard title="not-found.js" glowColor="violet" className="max-w-md mx-auto">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      未找到项目
                    </h3>
                    <p className="text-gray-300">
                      没有找到符合"{searchTerm}"搜索条件的项目。
                    </p>
                    <div className="pt-4 space-y-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('all');
                        }}
                      >
                        清除筛选条件
                      </Button>
                    </div>
                  </div>
                </TerminalCard>
              </div>
            )}
          </div>
        </section>

        {/* 当前筛选状态 */}
        {filteredProjects.length > 0 && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-6xl mx-auto text-center">
              <TerminalCard title="search-results.js" glowColor="green" className="inline-block">
                <div className="font-mono text-sm">
                  <span className="text-gray-400">const </span>
                  <span className="text-blue-400">results</span>
                  <span className="text-gray-400"> = {`{`}</span>
                  <div className="ml-4 text-gray-400">
                    <span className="text-pink-400">category:</span>
                    <span className="text-green-400"> "{selectedCategory === 'all' ? '全部' : projectCategories.find(c => c.id === selectedCategory)?.name}",</span>
                  </div>
                  {searchTerm && (
                    <div className="ml-4 text-gray-400">
                      <span className="text-pink-400">search:</span>
                      <span className="text-green-400"> "{searchTerm}",</span>
                    </div>
                  )}
                  <div className="ml-4 text-gray-400">
                    <span className="text-pink-400">count:</span>
                    <span className="text-green-400"> {filteredProjects.length}</span>
                  </div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </TerminalCard>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}