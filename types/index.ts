// 个人信息类型
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  email: string;
  wechat: string;
  qq: string;
  location: string;
  education: string;
  major: string;
  github: string;
}

// 技能类型
export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'data-analysis' | 'web-development' | 'ai-application' | 'machine-learning' | 'miniprogram';
  level: number; // 1-5
  description: string;
}

// 项目类型
export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  role: string;
  tools: string[];
  screenshots: string[];
  videos?: string[];
  codeUrl?: string;
  demoUrl?: string;
  category: 'data-analysis' | 'web-development' | 'ai-application' | 'machine-learning' | 'miniprogram';
  featured: boolean;
}

// 经历类型
export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  type: 'internship' | 'competition' | 'education';
}

// 社交链接类型
export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  color: string;
}

// 项目分类信息
export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}