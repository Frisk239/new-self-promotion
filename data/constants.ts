import { PersonalInfo, ProjectCategory, SocialLink } from '@/types';

// 个人信息
export const personalInfo: PersonalInfo = {
  name: '余磊',
  title: '全栈开发工程师 & AI应用开发者',
  description: '计算机科学与技术专业学生，专注于数据分析、Web开发、AI应用和机器学习',
  avatar: '/static/touxiang.jpg',
  email: 'a2691218460@outlook.com',
  wechat: 'a2691218460',
  qq: '2691218460',
  location: '中国',
  education: '2023级',
  major: '计算机科学与技术（中英合办）',
  github: 'https://github.com/Frisk239'
};

// 项目分类
export const projectCategories: ProjectCategory[] = [
  {
    id: 'data-analysis',
    name: '数据分析',
    description: '数据挖掘、可视化与统计分析项目',
    icon: 'BarChart3',
    color: '#16f2b3'
  },
  {
    id: 'web-development',
    name: 'Web开发',
    description: '网站应用和企业管理系统',
    icon: 'Code2',
    color: '#3b82f6'
  },
  {
    id: 'ai-application',
    name: 'AI应用',
    description: '智能体搭建和AI大模型应用',
    icon: 'Bot',
    color: '#ec4899'
  },
  {
    id: 'machine-learning',
    name: '机器学习',
    description: '机器学习模型和应用开发',
    icon: 'BrainCircuit',
    color: '#8b5cf6'
  },
  {
    id: 'miniprogram',
    name: '小程序',
    description: '微信小程序开发项目',
    icon: 'Smartphone',
    color: '#f59e0b'
  }
];

// 社交链接
export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    icon: 'Github',
    url: 'https://github.com/Frisk239',
    color: '#ffffff'
  },
  {
    id: 'email',
    name: '邮箱',
    icon: 'Mail',
    url: 'mailto:a2691218460@outlook.com',
    color: '#16f2b3'
  },
  {
    id: 'wechat',
    name: '微信',
    icon: 'MessageCircle',
    url: '#',
    color: '#16f2b3'
  },
  {
    id: 'qq',
    name: 'QQ',
    icon: 'MessageSquare',
    url: 'tencent://message/?uin=2691218460',
    color: '#3b82f6'
  }
];

// 技术栈列表
export const techStack = [
  { name: 'Python', icon: 'file-type-python' },
  { name: 'JavaScript', icon: 'file-type-js' },
  { name: 'TypeScript', icon: 'file-type-typescript-official' },
  { name: 'React', icon: 'file-type-reactjs' },
  { name: 'Next.js', icon: 'file-type-next' },
  { name: 'Vue.js', icon: 'file-type-vue' },
  { name: 'Node.js', icon: 'file-type-nodejs' },
  { name: 'HTML', icon: 'file-type-html' },
  { name: 'CSS', icon: 'file-type-css' },
  { name: 'Tailwind CSS', icon: 'file-type-tailwind' },
  { name: 'Sass', icon: 'file-type-sass' },
  { name: 'MySQL', icon: 'file-type-mysql' },
  { name: 'MongoDB', icon: 'file-type-mongo' },
  { name: 'Git', icon: 'file-type-git' },
  { name: 'Docker', icon: 'file-type-docker' },
  { name: 'Linux', icon: 'file-type-linux' },
  { name: 'TensorFlow', icon: 'file-type-tensorflow' },
  { name: 'PyTorch', icon: 'file-type-pytorch' },
  { name: 'Scikit-learn', icon: 'file-type-scss' },
  { name: 'Pandas', icon: 'file-type-py' },
  { name: 'NumPy', icon: 'file-type-py' },
  { name: 'Matplotlib', icon: 'file-type-py' },
  { name: 'ECharts', icon: 'file-type-js' }
];

// 导航菜单
export const navigationMenu = [
  { name: '首页', href: '/' },
  { name: '项目', href: '/projects' },
  { name: '关于', href: '/about' },
  { name: '联系', href: '/contact' }
];

// 页面标题
export const pageTitles = {
  home: '余磊 - 全栈开发工程师',
  projects: '项目展示',
  about: '关于我',
  contact: '联系方式'
};

// 动画配置
export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  },
  slideInFromLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  slideInFromRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  }
};