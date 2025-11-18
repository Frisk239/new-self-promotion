'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text?: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  showCursor?: boolean;
  highlightWords?: string[];
  highlightColor?: string;
  customHighlights?: { word: string; color: string }[];
  children?: React.ReactNode;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  children,
  className = '',
  delay = 0,
  charDelay = 0.05,
  showCursor = true,
  highlightWords = [],
  highlightColor = 'text-pink-500',
  customHighlights = []
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const content = text || (children ? children.toString() : '');

  useEffect(() => {
    if (!isVisible || !content) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= content.length) {
        setDisplayText(content.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, charDelay * 1000);

    return () => clearInterval(interval);
  }, [isVisible, content, charDelay]);

  const shouldHighlight = (char: string, index: number) => {
    const remainingText = content.slice(index);
    return highlightWords.some(highlightWord =>
      remainingText.startsWith(highlightWord) && char === highlightWord[0]
    );
  };

  const getHighlightColor = (word: string) => {
    // 首先检查自定义高亮
    for (const customHighlight of customHighlights) {
      if (word.includes(customHighlight.word)) {
        return customHighlight.color;
      }
    }

    // 然后检查默认高亮
    for (const highlightWord of highlightWords) {
      if (word.includes(highlightWord)) {
        return highlightColor;
      }
    }

    return null;
  };

  const renderHighlightedText = (text: string) => {
    const elements = [];
    let currentIndex = 0;

    while (currentIndex < text.length) {
      const char = text[currentIndex];

      // 处理换行符
      if (char === '\n') {
        elements.push(<br key={`br-${currentIndex}`} />);
        currentIndex++;
        continue;
      }

      let highlighted = false;
      let highlightLength = 0;
      let highlightClassName = null;

      // 检查自定义高亮
      for (const customHighlight of customHighlights) {
        if (text.slice(currentIndex).startsWith(customHighlight.word)) {
          highlighted = true;
          highlightLength = customHighlight.word.length;
          highlightClassName = customHighlight.color;
          break;
        }
      }

      // 检查默认高亮
      if (!highlighted) {
        for (const word of highlightWords) {
          if (text.slice(currentIndex).startsWith(word)) {
            highlighted = true;
            highlightLength = word.length;
            highlightClassName = highlightColor;
            break;
          }
        }
      }

      if (highlighted && highlightClassName) {
        const highlightedText = text.slice(currentIndex, currentIndex + highlightLength);
        elements.push(
          <span key={currentIndex} className={highlightClassName}>
            {highlightedText}
          </span>
        );
        currentIndex += highlightLength;
      } else {
        elements.push(char);
        currentIndex++;
      }
    }

    return elements;
  };

  return (
    <div className={className}>
      {isVisible && (
        <>
          {renderHighlightedText(displayText).map((element, index) =>
            React.isValidElement(element) ?
              React.cloneElement(element, { key: index }) :
              <span key={index}>{element}</span>
          )}
          {showCursor && (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-current"
            >
              |
            </motion.span>
          )}
        </>
      )}
    </div>
  );
};