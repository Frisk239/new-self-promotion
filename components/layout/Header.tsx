'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Mail, MessageCircle, MessageSquare } from 'lucide-react';
import { navigationMenu, socialLinks } from '@/data/constants';
import GlowCard from '@/components/ui/GlowCard';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={18} />;
      case 'Mail':
        return <Mail size={18} />;
      case 'MessageCircle':
        return <MessageCircle size={18} />;
      case 'MessageSquare':
        return <MessageSquare size={18} />;
      default:
        return <MessageSquare size={18} />;
    }
  };

  return (
    <>
      {/* 顶部导航栏 */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1224]/80 backdrop-blur-lg md:backdrop-blur-sm border-b border-[#2a2e5a]'
            : 'bg-transparent md:bg-[#0d1224]/60 md:backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">YL</span>
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">
                余磊
              </span>
            </Link>

            {/* 桌面导航 */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActiveLink(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-pink-600" />
                  )}
                </Link>
              ))}
            </nav>

            {/* 社交链接 - 桌面端 */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.filter(link => link.id === 'github').map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  style={{ color: link.color }}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
              <Button variant="primary" size="sm">
                联系我
              </Button>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white active:text-white active:scale-95 transition-all duration-200 p-2 -m-2 touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* 背景遮罩 */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* 菜单面板 */}
          <div className="absolute top-0 right-0 h-full w-64 bg-[#101123] border-l border-[#2a2e5a]">
            <div className="flex flex-col h-full">
              {/* 菜单头部 */}
              <div className="flex items-center justify-between p-4 border-b border-[#2a2e5a]">
                <span className="text-white font-semibold text-lg">菜单</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* 导航链接 */}
              <nav className="flex-1 p-4">
                <div className="space-y-2">
                  {navigationMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 active:scale-[0.98] touch-manipulation ${
                        isActiveLink(item.href)
                          ? 'bg-[#2a2e5a] text-white'
                          : 'text-gray-300 hover:bg-[#1a1f3a] hover:text-white active:bg-[#1a1f3a] active:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* 社交链接 */}
              <div className="p-4 border-t border-[#2a2e5a]">
                <div className="flex justify-center space-x-4">
                  {socialLinks.filter(link => link.id === 'github').map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      style={{ color: link.color }}
                    >
                      {getSocialIcon(link.icon)}
                    </a>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="primary" size="sm" className="w-full">
                    联系我
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;