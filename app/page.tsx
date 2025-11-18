import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlowCard from '@/components/ui/GlowCard';
import TerminalCard from '@/components/ui/TerminalCard';
import Button from '@/components/ui/Button';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1224]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6">
              你好，我是余磊
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              全栈开发工程师 & AI应用开发者
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              计算机科学与技术专业学生，专注于数据分析、Web开发、AI应用和机器学习
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                查看我的项目
              </Button>
              <Button variant="secondary" size="lg">
                联系我
              </Button>
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