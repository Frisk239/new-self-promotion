import { Project } from '@/types';

export const projects: Project[] = [
  // 数据分析项目
  {
    id: '1',
    name: '校园数据分析平台',
    description: '基于Python的校园数据挖掘与可视化分析系统',
    detailedDescription: '通过数据挖掘技术分析校园学生行为数据，提供多维度的数据可视化报告，帮助学校管理者了解学生活动规律。该平台使用Pandas进行数据处理，Matplotlib和ECharts进行可视化展示，支持实时数据更新和多维度分析。',
    role: '数据分析工程师',
    tools: ['Python', 'Pandas', 'Matplotlib', 'ECharts', 'NumPy'],
    screenshots: ['/static/image/data-analysis-image/数据分析作品截图1.jpg'],
    videos: [],
    codeUrl: 'https://github.com/Frisk239',
    category: 'data-analysis',
    featured: true,
    startDate: '2024-03-01',
    endDate: '2024-05-15'
  },

  // Web开发项目
  {
    id: '2',
    name: '企业信息管理系统',
    description: '基于React和Node.js的企业级信息管理平台',
    detailedDescription: '为中小企业开发的一站式信息管理系统，包含员工管理、项目管理、财务报表等模块，支持权限管理和数据可视化。采用现代化技术栈，支持响应式设计和实时数据更新。',
    role: '全栈开发工程师',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MySQL'],
    screenshots: ['/static/image/web-image/网页搭建作品截图1.png', '/static/image/web-image/网页搭建作品截图2.png', '/static/image/web-image/网页搭建作品截图3.png', '/static/image/web-image/网页搭建作品截图4.png'],
    videos: ['/static/video/minpaixinyu-web.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'web-development',
    featured: true,
    startDate: '2024-01-15',
    endDate: '2024-04-20'
  },

  // AI应用项目
  {
    id: '3',
    name: '智能客服机器人',
    description: '基于大语言模型的智能客服系统',
    detailedDescription: '集成OpenAI和其他AI大模型的智能客服机器人，支持多轮对话、知识库问答、意图识别等功能，可广泛应用于电商平台和客服中心。系统具备智能回复能力，支持上下文记忆和多语言交互。',
    role: 'AI应用开发工程师',
    tools: ['Python', 'OpenAI API', 'LangChain', 'React', 'FastAPI'],
    screenshots: ['/static/image/agent-image/agent智能体搭建作品截图1.png', '/static/image/agent-image/agent智能体搭建作品截图2.png', '/static/image/agent-image/agent智能体搭建作品截图3.png', '/static/image/agent-image/agent智能体搭建作品截图4.png', '/static/image/agent-image/agent智能体搭建作品截图5.png'],
    videos: ['/static/video/Git-Tutor-AI-Agent.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'ai-application',
    featured: true,
    startDate: '2024-02-01',
    endDate: '2024-06-30'
  },

  // 机器学习项目
  {
    id: '4',
    name: '图像识别系统',
    description: '基于深度学习的图像分类和目标检测系统',
    detailedDescription: '使用卷积神经网络实现的图像识别系统，支持多种图像分类任务和目标检测功能，准确率达到95%以上。采用TensorFlow和PyTorch框架，支持模型训练、验证和部署。',
    role: '机器学习工程师',
    tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn'],
    screenshots: ['/static/image/machinelearning-image/机器学习模型应用相关截图1.png', '/static/image/machinelearning-image/机器学习模型应用相关截图2.png', '/static/image/machinelearning-image/机器学习模型应用相关截图3.png', '/static/image/machinelearning-image/机器学习模型应用相关截图4.png', '/static/image/machinelearning-image/机器学习模型应用相关截图5.png', '/static/image/machinelearning-image/机器学习模型应用相关截图6.png'],
    videos: ['/static/video/machinelearning.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'machine-learning',
    featured: true,
    startDate: '2023-11-01',
    endDate: '2024-02-28'
  },

  // 小程序项目
  {
    id: '5',
    name: '校园生活小程序',
    description: '微信小程序开发的校园生活服务平台',
    detailedDescription: '集成了校园导航、课程表查询、失物招领、校园活动等功能的一体化校园生活服务小程序，为师生提供便捷的移动服务。支持实时数据更新和消息推送功能。',
    role: '小程序开发工程师',
    tools: ['微信小程序', 'JavaScript', 'WXML', 'WXSS', 'Node.js'],
    screenshots: ['/static/image/miniprogtram-image/小程序搭建作品截图1.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图2.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图3.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图4.jpg', '/static/image/miniprogtram-image/小程序搭建作品截图5.jpg'],
    videos: ['/static/video/minpaixinyu-miniprogram.mp4'],
    codeUrl: 'https://github.com/Frisk239',
    category: 'miniprogram',
    featured: true,
    startDate: '2023-09-01',
    endDate: '2023-12-15'
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