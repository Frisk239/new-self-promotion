import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "余磊 - 个人网站",
  description: "计算机科学与技术专业学生，专注于数据分析、Web开发、AI应用和机器学习",
  keywords: ["余磊", "个人网站", "数据分析", "Web开发", "AI应用", "机器学习", "全栈开发"],
  authors: [{ name: "余磊" }],
  openGraph: {
    title: "余磊 - 个人网站",
    description: "计算机科学与技术专业学生，专注于数据分析、Web开发、AI应用和机器学习",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-sans)',
        }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
