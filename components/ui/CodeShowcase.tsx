'use client';

import React from 'react';
import TerminalCard from './TerminalCard';
import { techStack } from '@/data/constants';

const CodeShowcase: React.FC = () => {
  // 从技术栈数据中提取技术名称
  const skills = techStack.map(tech => tech.name);

  const code = `const developer = {
  name: '余磊',
  skills: [
    '${skills.slice(0, 6).join("', '")}',
    '${skills.slice(6, 12).join("', '")}',
    '${skills.slice(12, 18).join("', '")}',
    '${skills.slice(18).join("', '")}'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  return (
    <TerminalCard
      title="developer-profile.js"
      glowColor="violet"
      className="h-full"
    >
      <div className="font-mono text-sm">
        <pre className="leading-relaxed overflow-x-auto">
          <code>
            {/* const developer = { */}
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">developer</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>

            {/* name: '余磊', */}
            <div>
              <span className="ml-4 mr-2 text-white">name:</span>
              <span className="text-gray-400">{'\''}</span>
              <span className="text-amber-300">余磊</span>
              <span className="text-gray-400">{'\','}</span>
            </div>

            {/* skills: [...] */}
            <div>
              <span className="ml-4 mr-2 text-white">skills:</span>
              <span className="text-gray-400">[</span>
              <span className="text-amber-300">{'\'' + skills.slice(0, 6).join('\', \'') + '\''}</span>
              <span className="text-gray-400">,</span>
            </div>
            {skills.length > 6 && (
              <div>
                <span className="ml-8"></span>
                <span className="text-amber-300">{'\'' + skills.slice(6, 12).join('\', \'') + '\''}</span>
                <span className="text-gray-400">,</span>
              </div>
            )}
            {skills.length > 12 && (
              <div>
                <span className="ml-8"></span>
                <span className="text-amber-300">{'\'' + skills.slice(12, 18).join('\', \'') + '\''}</span>
                <span className="text-gray-400">,</span>
              </div>
            )}
            {skills.length > 18 && (
              <div>
                <span className="ml-8"></span>
                <span className="text-amber-300">{'\'' + skills.slice(18).join('\', \'') + '\''}</span>
                <span className="text-gray-400">,</span>
              </div>
            )}
            <div>
              <span className="ml-4 text-gray-400">]</span>
              <span className="text-gray-400">,</span>
            </div>

            {/* hardWorker: true, */}
            <div>
              <span className="ml-4 mr-2 text-white">hardWorker:</span>
              <span className="text-green-400">true</span>
              <span className="text-gray-400">,</span>
            </div>

            {/* quickLearner: true, */}
            <div>
              <span className="ml-4 mr-2 text-white">quickLearner:</span>
              <span className="text-green-400">true</span>
              <span className="text-gray-400">,</span>
            </div>

            {/* problemSolver: true, */}
            <div>
              <span className="ml-4 mr-2 text-white">problemSolver:</span>
              <span className="text-green-400">true</span>
              <span className="text-gray-400">,</span>
            </div>

            {/* hireable: function() { */}
            <div>
              <span className="ml-4 mr-2 text-white">hireable:</span>
              <span className="text-orange-400">function()</span>
              <span className="text-gray-400">{'{'}</span>
            </div>

            {/* return ( */}
            <div className="ml-8">
              <span className="mr-2 text-pink-500">return</span>
              <span className="text-gray-400">(</span>
            </div>

            {/* this.hardWorker && */}
            <div className="ml-8">
              <span className="ml-4 mr-2 text-white">this.hardWorker</span>
              <span className="text-pink-500">{'&&'}</span>
            </div>

            {/* this.problemSolver && */}
            <div className="ml-8">
              <span className="ml-4 mr-2 text-white">this.problemSolver</span>
              <span className="text-pink-500">{'&&'}</span>
            </div>

            {/* this.skills.length >= 5 */}
            <div className="ml-8">
              <span className="ml-4 mr-2 text-white">this.skills.length</span>
              <span className="text-pink-500">{'>='}</span>
              <span className="text-white">5</span>
            </div>

            {/* ); */}
            <div className="ml-8">
              <span className="text-gray-400">);</span>
            </div>

            {/* }; */}
            <div>
              <span className="text-gray-400">{'};'}</span>
            </div>
          </code>
        </pre>
      </div>
    </TerminalCard>
  );
};

export default CodeShowcase;