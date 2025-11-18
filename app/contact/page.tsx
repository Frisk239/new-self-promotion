'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TerminalCard from '@/components/ui/TerminalCard';
import GlowCard from '@/components/ui/GlowCard';
import { personalInfo, socialLinks } from '@/data/constants';
import { Mail, MessageCircle, MessageSquare, Github, MapPin } from 'lucide-react';

export default function Contact() {

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

  return (
    <div className="min-h-screen bg-[#0d1224]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              联系我
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              有项目合作或技术交流的想法？欢迎随时联系我！
            </p>
          </div>
        </section>

        {/* 联系信息 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                联系方式
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                欢迎通过以下方式联系我
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlowCard glowColor="green" className="p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">邮箱</h3>
                    <p className="text-gray-300">{personalInfo.email}</p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard glowColor="pink" className="p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">微信</h3>
                    <p className="text-gray-300">{personalInfo.wechat}</p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard glowColor="blue" className="p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">QQ</h3>
                    <p className="text-gray-300">{personalInfo.qq}</p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard glowColor="violet" className="p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">位置</h3>
                    <p className="text-gray-300">{personalInfo.location}</p>
                  </div>
                </div>
              </GlowCard>
            </div>

            {/* 社交媒体 */}
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-white mb-8">
                社交媒体
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link) => {
                  const isGithub = link.id === 'github';
                  return isGithub ? (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <GlowCard glowColor="violet" className="p-4 hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="text-white" style={{ color: link.color }}>
                            {getSocialIcon(link.icon)}
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm">
                            {link.name}
                          </span>
                        </div>
                      </GlowCard>
                    </a>
                  ) : (
                    <div key={link.id}>
                      <GlowCard glowColor="violet" className="p-4 hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center space-y-3">
                          <div className="text-white" style={{ color: link.color }}>
                            {getSocialIcon(link.icon)}
                          </div>
                          <span className="text-gray-300 text-sm">
                            {link.name}
                          </span>
                        </div>
                      </GlowCard>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 响应时间说明 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <TerminalCard title="response-time.md" glowColor="green">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  响应时间
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="text-green-400 font-semibold mb-2">📧 邮件</div>
                    <p className="text-gray-300 text-sm">24小时内回复</p>
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold mb-2">💬 微信/QQ</div>
                    <p className="text-gray-300 text-sm">在线时立即回复</p>
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold mb-2">🤝 项目合作</div>
                    <p className="text-gray-300 text-sm">工作日尽快响应</p>
                  </div>
                </div>
              </div>
            </TerminalCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}