import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TerminalCard from '@/components/ui/TerminalCard';
import GlowCard from '@/components/ui/GlowCard';
import ProfileImage from '@/components/ui/ProfileImage';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { personalInfo } from '@/data/constants';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d1224]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              关于我
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              计算机科学与技术专业学生，热衷于全栈开发和AI应用创新
            </p>
          </div>
        </section>

        {/* 个人简介 - Who I Am */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* 左侧：个人介绍文字 */}
              <div className="space-y-6 order-2 lg:order-1">
                <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                  Who I am?
                </p>

                <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                  <TypewriterText
                    className="text-lg leading-relaxed"
                    text="作为计算机科学与技术专业的学生，我对技术充满热情，特别是在全栈开发、数据分析和AI应用领域。我相信技术的力量可以改变世界，致力于通过创新的技术解决方案来解决实际问题。"
                    delay={800}
                    charDelay={0.03}
                    showCursor={true}
                  />
                  <TypewriterText
                    className="text-lg leading-relaxed"
                    text="在学习过程中，我不仅掌握了扎实的理论基础，更通过实际项目积累了丰富的开发经验。从数据分析到Web应用开发，从机器学习模型应用到AI Agent智能体搭建，我不断挑战自己，拓展技术边界。"
                    delay={4500}
                    charDelay={0.03}
                    showCursor={true}
                  />
                </div>

                {/* 核心技能 */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-lg font-semibold text-white">核心技能</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      '前端开发 (React/Vue)',
                      '后端开发 (Node.js/Python)',
                      '数据分析 (Python/Pandas)',
                      'AI应用 (OpenAI/LangChain)',
                      '机器学习 (TensorFlow/PyTorch)',
                      '移动开发 (小程序)'
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-sm text-gray-300 hover:border-violet-500 hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 个人信息代码卡片 */}
                <div className="pt-6">
                  <TerminalCard title="profile.json" glowColor="violet" className="text-sm">
                    <div className="font-mono space-y-1">
                      <div className="text-green-400">{`{`}</div>
                      <div className="ml-4 space-y-1">
                        <div>
                          <span className="text-pink-400">"name":</span>
                          <span className="text-green-400"> "{personalInfo.name}",</span>
                        </div>
                        <div>
                          <span className="text-pink-400">"title":</span>
                          <span className="text-green-400"> "{personalInfo.title}",</span>
                        </div>
                        <div>
                          <span className="text-pink-400">"education":</span>
                          <span className="text-green-400"> "{personalInfo.education}",</span>
                        </div>
                        <div>
                          <span className="text-pink-400">"major":</span>
                          <span className="text-green-400"> "{personalInfo.major}"</span>
                        </div>
                      </div>
                      <div className="text-green-400">{`}`}</div>
                    </div>
                  </TerminalCard>
                </div>
              </div>

              {/* 右侧：头像展示 */}
              <div className="flex justify-center order-1 lg:order-2">
                <ProfileImage
                  src="/static/touxiang.jpg"
                  alt="余磊 - 个人头像"
                  size="lg"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 教育经历 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                教育经历
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                学术背景与实践经历
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* 左侧：动画装饰 */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* 背景动画圆圈 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-full animate-pulse" />
                    <div className="absolute w-48 h-48 bg-gradient-to-r from-violet-600/10 to-pink-600/10 rounded-full animate-ping" />
                    <div className="absolute w-32 h-32 bg-gradient-to-r from-violet-600/5 to-pink-600/5 rounded-full" />
                  </div>

                  {/* 中央图标 */}
                  <div className="relative flex items-center justify-center h-96">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">📚</span>
                    </div>
                  </div>

                  {/* 装饰性元素 */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-violet-500/30 rounded-full animate-bounce" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-pink-500/30 rounded-full animate-ping" />
                  <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse" />
                </div>
              </div>

              {/* 右侧：教育经历卡片 */}
              <div className="space-y-8">
                <GlowCard glowColor="violet" className="group hover:scale-[1.02] transition-all duration-500">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-violet-600 to-violet-700 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        🎓
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
                            教育经历
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          计算机科学与技术（中英合办）
                        </h3>
                        <p className="text-gray-300 mb-2">
                          计算机与网络空间安全学院
                        </p>
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="bg-[#1a1f3a] px-2 py-1 rounded-full">
                            2023年9月 - 至今
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                <GlowCard glowColor="pink" className="group hover:scale-[1.02] transition-all duration-500">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        💼
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-pink-400 uppercase tracking-wider">
                            实习经历
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          戴尔科技集团实习
                        </h3>
                        <p className="text-gray-300 mb-2">
                          高端存储自动化生产及测试工程师
                        </p>
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="bg-[#1a1f3a] px-2 py-1 rounded-full">
                            2024年夏季
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          </div>
        </section>

        {/* 个人理念 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <TerminalCard title="philosophy.md" glowColor="green">
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-semibold text-white text-center mb-6">
                  我的理念
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">▶</span>
                    <p className="text-gray-300">
                      <strong className="text-white">持续学习：</strong>
                      技术在不断进步，我坚信终身学习是保持竞争力的关键
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">▶</span>
                    <p className="text-gray-300">
                      <strong className="text-white">实践创新：</strong>
                      理论与实践相结合，勇于尝试新技术和新方法
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">▶</span>
                    <p className="text-gray-300">
                      <strong className="text-white">团队协作：</strong>
                      相信团队的力量，善于沟通和分享知识
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 text-lg mt-1">▶</span>
                    <p className="text-gray-300">
                      <strong className="text-white">用户至上：</strong>
                      始终以用户需求为导向，开发有价值的产品
                    </p>
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