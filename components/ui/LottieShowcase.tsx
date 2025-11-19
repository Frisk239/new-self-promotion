'use client';

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieFile {
  name: string;
  animation: any;
  description: string;
}

const lottieFilesConfig = [
  {
    name: 'coding',
    description: '编码动画 - 可能包含打字、代码编写等动作'
  },
  {
    name: 'code',
    description: '代码相关动画 - 代码高亮或编辑器动画'
  },
  {
    name: 'build',
    description: '构建动画 - 可能是编译、打包或部署过程'
  },
  {
    name: 'contact',
    description: '联系动画 - 邮件、消息或社交联系相关'
  },
  {
    name: 'development',
    description: '开发流程动画 - 软件开发过程展示'
  },
  {
    name: 'education',
    description: '教育学习动画 - 学习、成长或知识获取'
  },
  {
    name: 'js',
    description: 'JavaScript动画 - JS logo或相关编程元素'
  },
  {
    name: 'study',
    description: '学习动画 - 读书、研究或学术活动'
  },
  {
    name: 'lotti',
    description: '复杂综合动画 - 可能包含多个场景转换'
  }
];

export const LottieShowcase: React.FC = () => {
  const [lottieFiles, setLottieFiles] = useState<LottieFile[]>([]);
  const [selectedAnimation, setSelectedAnimation] = useState<LottieFile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const files = await Promise.all(
          lottieFilesConfig.map(async (config) => {
            const response = await fetch(`/static/lottie/${config.name}.json`);
            if (!response.ok) {
              console.warn(`Failed to load ${config.name}.json`);
              return null;
            }
            const animationData = await response.json();
            return {
              ...config,
              animation: animationData
            };
          })
        );

        const validFiles = files.filter(Boolean) as LottieFile[];
        setLottieFiles(validFiles);
        if (validFiles.length > 0) {
          setSelectedAnimation(validFiles[0]);
        }
      } catch (error) {
        console.error('Error loading animations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnimations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">加载动画文件中...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedAnimation) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">无法加载动画文件</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Lottie 动画预览
        </h1>

        {/* 动画展示区 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-64 h-64">
              <Lottie
                animationData={selectedAnimation.animation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {selectedAnimation.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedAnimation.description}
            </p>
          </div>
        </div>

        {/* 动画选择网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lottieFiles.map((file) => (
            <button
              key={file.name}
              onClick={() => setSelectedAnimation(file)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedAnimation.name === file.name
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="w-full h-32 mb-3">
                <Lottie
                  animationData={file.animation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                {file.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {file.description}
              </p>
            </button>
          ))}
        </div>

        {/* 使用说明 */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            如何使用这些动画：
          </h3>
          <div className="text-blue-800 dark:text-blue-200 space-y-2">
            <p>1. 选择你喜欢的动画</p>
            <p>2. 在你的组件中这样使用：</p>
            <div className="bg-blue-100 dark:bg-blue-800/30 rounded p-3 font-mono text-sm">
              {`import Lottie from 'lottie-react';

// 方法一：动态加载
const response = await fetch('/static/lottie/${selectedAnimation.name}.json');
const animationData = await response.json();

<Lottie animationData={animationData} loop={true} autoplay={true} />`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};