import React from 'react';
import Link from 'next/link';
import { Github, Mail, MessageCircle, MessageSquare, Heart } from 'lucide-react';
import { socialLinks, navigationMenu } from '@/data/constants';

const Footer: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      case 'MessageCircle':
        return <MessageCircle size={20} />;
      case 'MessageSquare':
        return <MessageSquare size={20} />;
      default:
        return <MessageSquare size={20} />;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101123] border-t border-[#2a2e5a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 个人信息 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">YL</span>
              </div>
              <span className="text-white font-semibold text-lg">余磊</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              计算机科学与技术专业学生，专注于数据分析、Web开发、AI应用和机器学习。
            </p>
            <div className="flex space-x-4">
              {socialLinks.filter(link => link.id === 'github').map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  style={{ color: link.color }}
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
              {socialLinks.filter(link => link.id !== 'github').map((link) => (
                <div
                  key={link.id}
                  className="text-gray-400"
                  style={{ color: link.color }}
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </div>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {navigationMenu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>2691218460@qq.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MessageCircle size={16} />
                <span>微信: a2691218460</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MessageSquare size={16} />
                <span>QQ: 2691218460</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-[#2a2e5a] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center space-x-2">
              <span>© {currentYear} 余磊</span>
              <span>•</span>
              <span>保留所有权利</span>
            </div>
            <div className="text-gray-400 text-sm flex items-center space-x-2">
              <span>用</span>
              <Heart size={14} className="text-red-500" />
              <span>精心打造</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;