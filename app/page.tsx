import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlowCard from '@/components/ui/GlowCard';
import TerminalCard from '@/components/ui/TerminalCard';
import Button from '@/components/ui/Button';
import CodeShowcase from '@/components/ui/CodeShowcase';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1224]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
              {/* 左侧：欢迎文字 */}
              <div className="order-2 lg:order-1 flex flex-col items-start justify-center space-y-6">
                <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                  你好，<br />
                  这是{' '}
                  <span className="text-pink-500">余磊</span>
                  {`，我是一名专业的`}
                  <br />
                  <span className="text-[#16f2b3]">全栈开发工程师 & AI应用开发者</span>
                  {'。'}
                </h1>

                <p className="text-lg text-gray-300 lg:text-xl leading-relaxed">
                  计算机科学与技术专业学生，专注于数据分析、Web开发、AI应用和机器学习。
                  我热爱探索新技术，致力于通过创新的解决方案来解决实际问题。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/projects">
                    <Button variant="primary" size="lg" className="group">
                      查看我的项目
                      <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary" size="lg" className="group">
                      联系我
                      <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* 右侧：代码展示 */}
              <div className="order-3 lg:order-2">
                <CodeShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />
      </main>

      <Footer />
    </div>
  );
}