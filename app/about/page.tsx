import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TerminalCard from '@/components/ui/TerminalCard';
import GlowCard from '@/components/ui/GlowCard';
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

        {/* 个人简介 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 左侧：个人信息卡片 */}
              <div>
                <TerminalCard title="profile.json" glowColor="violet">
                  <div className="font-mono text-sm space-y-2">
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
                        <span className="text-green-400"> "{personalInfo.major}",</span>
                      </div>
                      <div>
                        <span className="text-pink-400">"location":</span>
                        <span className="text-green-400"> "{personalInfo.location}"</span>
                      </div>
                    </div>
                    <div className="text-green-400">{`}`}</div>
                  </div>
                </TerminalCard>
              </div>

              {/* 右侧：详细介绍 */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">
                  我的故事
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p className="leading-relaxed">
                    作为计算机科学与技术专业的学生，我对技术充满热情，特别是在全栈开发、数据分析和AI应用领域。
                    我相信技术的力量可以改变世界，致力于通过创新的技术解决方案来解决实际问题。
                  </p>
                  <p className="leading-relaxed">
                    在学习过程中，我不仅掌握了扎实的理论基础，更通过实际项目积累了丰富的开发经验。
                    从数据分析到Web应用开发，从机器学习模型到智能客服系统，我不断挑战自己，拓展技术边界。
                  </p>
                </div>

                {/* 核心技能 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">核心技能</h3>
                  <div className="grid grid-cols-2 gap-3">
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
                        className="px-3 py-2 bg-[#1a1f3a] border border-[#2a2e5a] rounded-lg text-sm text-gray-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 教育经历 */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              教育经历
            </h2>

            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-600 to-pink-600"></div>

              {/* 时间线项目 */}
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <GlowCard glowColor="violet" className="p-6 inline-block text-left">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        计算机科学与技术（中英合办）
                      </h3>
                      <p className="text-gray-300 mb-2">
                        计算机与网络空间安全学院
                      </p>
                      <p className="text-sm text-gray-400">
                        2023年9月 - 至今
                      </p>
                    </GlowCard>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full border-4 border-[#0d1224]"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full border-4 border-[#0d1224]"></div>
                  <div className="flex-1 text-left pl-8">
                    <GlowCard glowColor="pink" className="p-6 inline-block">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        戴尔科技集团实习
                      </h3>
                      <p className="text-gray-300 mb-2">
                        高端存储自动化生产及测试
                      </p>
                      <p className="text-sm text-gray-400">
                        2024年夏季
                      </p>
                    </GlowCard>
                  </div>
                </div>
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