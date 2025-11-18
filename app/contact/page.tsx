'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TerminalCard from '@/components/ui/TerminalCard';
import GlowCard from '@/components/ui/GlowCard';
import Button from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/data/constants';
import { Mail, MessageCircle, MessageSquare, Github, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('表单数据:', formData);
    alert('感谢您的留言！我会尽快回复您。');
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* 左侧：联系表单 */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-8">
                  发送消息
                </h2>

                <TerminalCard title="contact-form.js" glowColor="violet">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        姓名
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors duration-200"
                        placeholder="您的姓名"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        邮箱
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        主题
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors duration-200"
                        placeholder="消息主题"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm mb-2">
                        消息内容
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors duration-200 resize-none"
                        placeholder="您的消息..."
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      <Send size={16} className="mr-2" />
                      发送消息
                    </Button>
                  </form>
                </TerminalCard>
              </div>

              {/* 右侧：联系方式 */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-8">
                    联系方式
                  </h2>

                  <div className="space-y-6">
                    <GlowCard glowColor="green" className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                          <Mail size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">邮箱</h3>
                          <a href="mailto:2691218460@qq.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                            2691218460@qq.com
                          </a>
                        </div>
                      </div>
                    </GlowCard>

                    <GlowCard glowColor="pink" className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center">
                          <MessageCircle size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">微信</h3>
                          <p className="text-gray-300">a2691218460</p>
                        </div>
                      </div>
                    </GlowCard>

                    <GlowCard glowColor="blue" className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                          <MessageSquare size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">QQ</h3>
                          <a href="tencent://message/?uin=2691218460" className="text-gray-300 hover:text-white transition-colors duration-200">
                            2691218460
                          </a>
                        </div>
                      </div>
                    </GlowCard>

                    <GlowCard glowColor="violet" className="p-6">
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
                </div>

                {/* 社交媒体 */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    社交媒体
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <GlowCard glowColor="violet" className="p-4 hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="text-white" style={{ color: link.color }}>
                              {getSocialIcon(link.icon)}
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                              {link.name}
                            </span>
                          </div>
                        </GlowCard>
                      </a>
                    ))}
                  </div>
                </div>
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