'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { techStack } from '@/data/constants';
import GlowCard from '@/components/ui/GlowCard';
import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  Package,
  Terminal,
  Palette,
  Server,
  Cpu,
  Brain,
  Flame,
  Layers,
  Globe,
  Zap,
  Code,
  FileCode,
  FileText,
  Coffee,
  TerminalSquare,
  BarChart3,
  Bot,
  BrainCircuit,
  Smartphone,
  Mail,
  MessageCircle,
  MessageSquare,
  Link,
  Github,
  Wrench,
  Shield,
  Briefcase,
  Users,
  CheckCircle,
  XCircle,
  TrendingUp,
  Download,
  ExternalLink,
  Sparkles,
  CpuChip,
  Settings,
  Monitor,
  Window
} from 'lucide-react';

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
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            direction="left"
            className="py-4"
          >
            {duplicatedStack.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="mx-4 min-w-[140px] max-w-[140px] h-[140px] flex flex-col items-center justify-center group relative"
              >
                {/* 卡片背景 */}
                <div className="absolute inset-0 rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] group-hover:border-violet-500 transition-all duration-500" />

                {/* 光晕效果 */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center px-4 py-6">
                  {/* 技术图标 */}
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                    {getTechIcon(tech.name)}
                  </div>
                  {/* 技术名称 */}
                  <span className="text-sm font-medium text-white group-hover:text-violet-200 transition-colors duration-300">
                    {tech.name}
                  </span>
                  {/* 技术分类 */}
                  <span className="text-xs text-gray-400 mt-1 block">
                    {tech.category}
                  </span>
                </div>
              </div>
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
const getTechIcon = (techName: string) => {
  // 根据技术类型返回精确匹配的图标
  switch (techName.toLowerCase()) {
    // === FRONTEND 技术组 ===
    // 框架和库
    case 'react':
      return <Flame size={32} />;          // React 火焰图标
    case 'next.js':
    case 'nextjs':
      return <Zap size={32} />;              // Next.js 闪电图标
    case 'vue.js':
    case 'vuejs':
      return <Sparkles size={32} />;        // Vue.js 闪光图标

    // 编程语言
    case 'javascript':
    case 'js':
      return <Code size={32} />;             // JavaScript 代码图标
    case 'typescript':
      return <FileCode size={32} />;         // TypeScript 文件图标

    // 样式技术
    case 'html':
      return <Globe size={32} />;            // HTML 全球网络图标
    case 'css':
      return <Palette size={32} />;          // CSS 调色板图标
    case 'tailwind css':
    case 'tailwind':
      return <Sparkles size={32} />;        // Tailwind CSS 闪光图标
    case 'sass':
      return <Palette size={32} />;          // SASS 调色板图标

    // === BACKEND 技术组 ===
    // 后端语言和运行时
    case 'node.js':
    case 'nodejs':
      return <Server size={32} />;           // Node.js 服务器图标
    case 'python':
      return <Brain size={32} />;            // Python AI智能图标

    // 后端框架
    case 'express':
    case 'expressjs':
      return <Package size={32} />;          // Express NPM包图标

    // === 数据库组 ===
    case 'mysql':
      return <Database size={32} />;         // MySQL 数据库图标
    case 'mongodb':
    case 'mongo':
      return <Database size={32} />;         // MongoDB 数据库图标

    // === AI/机器学习组 ===
    case 'tensorflow':
      return <BrainCircuit size={32} />;     // TensorFlow 神经网络图标
    case 'pytorch':
      return <Flame size={32} />;            // PyTorch 火焰图标
    case 'scikit-learn':
      return <BarChart3 size={32} />;        // Scikit-learn 数据分析图标
    case 'pandas':
      return <Database size={32} />;         // Pandas 数据管理图标
    case 'numpy':
      return <BarChart3 size={32} />;        // NumPy 数值计算图标
    case 'matplotlib':
      return <BarChart3 size={32} />;        // Matplotlib 数据可视化图标
    case 'echarts':
      return <BarChart3 size={32} />;        // ECharts 图表库图标

    // === DevOps/工具组 ===
    case 'git':
      return <GitBranch size={32} />;        // Git 版本控制图标
    case 'docker':
      return <Cloud size={32} />;            // Docker 容器图标
    case 'linux':
      return <Terminal size={32} />;         // Linux 终端图标

    // === 移动端组 ===
    case 'android':
      return <Smartphone size={32} />;       // Android 手机图标
    case 'ios':
      return <Smartphone size={32} />;       // iOS 手机图标

    // === 通用编程图标 ===
    default:
      return <Code size={32} />;             // 默认代码图标
  }
};

// 获取技能分类
const getSkillCategories = () => [
  { name: '前端开发', count: 8 },
  { name: '后端开发', count: 6 },
  { name: '数据科学', count: 6 },
  { name: '开发工具', count: 4 }
];

export default Skills;