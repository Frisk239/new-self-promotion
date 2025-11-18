import { Project } from '@/types';

export const projects: Project[] = [
  // 数据分析项目
  {
    id: '1',
    name: '数据分析项目',
    description: '数学建模竞赛专用算法实现和数据可视化代码集',
    detailedDescription: '数学建模竞赛专用算法实现和数据可视化代码集，包含多种统计分析模型、数据挖掘算法和可视化方案。使用Python生态系统的核心工具库，实现数据预处理、模型训练、结果可视化和报告生成的完整流程。',
    role: '数据分析工程师',
    tools: ['Python', 'Matplotlib', 'Pandas', 'NumPy', 'Scikit-learn', 'ECharts'],
    screenshots: ['/static/image/data-analysis-image/数据分析作品截图1.jpg'],
    videos: [],
    codeUrl: 'https://github.com/Frisk239',
    category: 'data-analysis',
    featured: true
  },

  // Web开发项目
  {
    id: '2',
    name: '闽派新语Web项目',
    description: '专注于Web应用的文化学习平台，包含AI对话、语音交互、PDF阅读等功能',
    detailedDescription: '专为福建文化学习打造的Web平台，集成AI对话、语音交互、PDF阅读器等功能。采用前后端分离架构，前端使用React和原生CSS实现响应式设计，后端基于Flask提供AI服务和数据管理，支持多城市文化内容探索和实时语音交互。',
    role: '全栈开发工程师',
    tools: ['React', 'TypeScript', 'Flask', 'SQLAlchemy', '原生CSS', 'Sass', 'D3.js', 'Axios', 'React Router'],
    screenshots: ['/static/image/web-image/网页搭建作品截图1.png', '/static/image/web-image/网页搭建作品截图2.png', '/static/image/web-image/网页搭建作品截图3.png', '/static/image/web-image/网页搭建作品截图4.png'],
    videos: ['/static/video/minpaixinyu-web.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'web-development',
    featured: true
  },

  // AI应用项目
  {
    id: '3',
    name: 'Git-Tutor-AI项目',
    description: '更新为AI驱动的Git项目分析工具',
    detailedDescription: '集成OpenAI、Anthropic、Gemini、DeepSeek、Moonshot等多个AI服务的Git项目分析平台。通过GitPython实现仓库自动化管理，提供智能代码解释、项目结构分析等功能，采用统一接口架构支持异步操作和数据库持久化。',
    role: 'AI应用开发工程师',
    tools: ['Python', 'FastAPI', 'Flask', 'GitPython', 'OpenAI API', 'Anthropic API', 'Gemini API', 'DeepSeek API', 'Moonshot API', 'SQLAlchemy'],
    screenshots: ['/static/image/agent-image/agent智能体搭建作品截图1.png', '/static/image/agent-image/agent智能体搭建作品截图2.png', '/static/image/agent-image/agent智能体搭建作品截图3.png', '/static/image/agent-image/agent智能体搭建作品截图4.png', '/static/image/agent-image/agent智能体搭建作品截图5.png'],
    videos: ['/static/video/Git-Tutor-AI-Agent.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'ai-application',
    featured: true
  },

  // 机器学习项目
  {
    id: '4',
    name: 'Mental Health App项目',
    description: '突出多模态心理健康支持系统，强调真实AI模型实现',
    detailedDescription: '集成真实AI模型的多模态心理健康支持平台，实现MediaPipe面部识别、TensorFlow.js浏览器端推理、OpenAI Whisper v3语音识别和GPT-SoVITS语音合成。提供实时情绪分析、智能对话支持和心理健康评估功能。',
    role: '机器学习工程师',
    tools: ['React', 'TypeScript', 'Flask', 'OpenAI Whisper', 'GPT-SoVITS', 'MediaPipe', 'TensorFlow.js', 'WebSocket'],
    screenshots: ['/static/image/machinelearning-image/机器学习模型应用相关截图1.png', '/static/image/machinelearning-image/机器学习模型应用相关截图2.png', '/static/image/machinelearning-image/机器学习模型应用相关截图3.png', '/static/image/machinelearning-image/机器学习模型应用相关截图4.png', '/static/image/machinelearning-image/机器学习模型应用相关截图5.png', '/static/image/machinelearning-image/机器学习模型应用相关截图6.png'],
    videos: ['/static/video/machinelearning.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'machine-learning',
    featured: true
  },

  // 小程序项目
  {
    id: '5',
    name: '闽派新语小程序项目',
    description: '基于Taro框架开发的跨平台文化学习小程序，实现与Web版功能对等的文化传承体验',
    detailedDescription: '使用Taro框架开发的跨平台文化学习小程序，支持微信、支付宝、百度等多个平台。实现与Web版功能对等的文化传承体验，包括城市探索、AI对话、语音交互等核心功能，体现一套代码多端运行的技术优势。',
    role: '小程序开发工程师',
    tools: ['Taro', 'React', 'TypeScript', 'Sass', '微信小程序', 'React Native'],
    screenshots: ['/static/image/miniprogtram-image/小程序搭建作品截图1.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图2.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图3.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图4.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图5.jpg'],
    videos: ['/static/video/minpaixinyu-miniprogram.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'miniprogram',
    featured: true
  },

  ];

// 获取精选项目
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// 按分类获取项目
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// 搜索项目
export const searchProjects = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project =>
    project.name.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tools.some(tool => tool.toLowerCase().includes(lowercaseQuery))
  );
};