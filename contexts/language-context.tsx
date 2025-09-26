"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 翻译数据
const currentYear = new Date().getFullYear()

const translations = {
  zh: {
    // 导航
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.features": "特性",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.privacy": "隐私政策",
    "nav.terms": "服务条款",

    // 首页内容
    "hero.title": "创新应用开发工作室",
    "hero.subtitle": "专注于开发优质 macOS 应用程序",
    "hero.description": "我们致力于创造简洁、高效、美观的应用程序，为用户提供卓越的数字体验。",
    "hero.learnMore": "了解更多",
    "hero.viewDemo": "查看演示",

    // 产品展示
    "product.title": "我们的产品",
    "product.pixor.title": "Pixor",
    "product.pixor.description": "专为 macOS 设计的现代化看图软件，支持多种图片格式，提供流畅的浏览体验。",
    "product.pixor.features": "• 支持多种图片格式\n• 快速预览和缩放\n• 简洁直观的界面\n• 高性能图片处理",
    "product.learnMore": "了解更多",
    "product.download": "立即下载",

    // 功能特性
    "features.title": "为什么选择我们",
    "features.quality.title": "高品质设计",
    "features.quality.description": "每个应用都经过精心设计，注重用户体验和视觉美感。",
    "features.performance.title": "卓越性能",
    "features.performance.description": "优化的代码和高效的算法，确保应用运行流畅。",
    "features.support.title": "持续支持",
    "features.support.description": "我们提供持续的更新和技术支持，确保最佳使用体验。",

    // 用户评价
    "testimonials.title": "用户评价",
    "testimonials.user1.name": "张先生",
    "testimonials.user1.role": "设计师",
    "testimonials.user1.content": "Pixor 是我用过的最好的看图软件，界面简洁，功能强大。",
    "testimonials.user2.name": "李女士",
    "testimonials.user2.role": "摄影师",
    "testimonials.user2.content": "作为摄影师，我需要快速预览大量图片，Pixor 完美满足了我的需求。",
    "testimonials.user3.name": "王先生",
    "testimonials.user3.role": "开发者",
    "testimonials.user3.content": "Soyotube 的应用质量很高，期待更多优秀的产品。",

    // 页脚
    "footer.description": "Soyotube 是一个专注于创新应用开发的工作室，致力于为用户提供优质的数字产品。",
    "footer.quickLinks": "快速链接",
    "footer.legal": "法律信息",
    "footer.contact": "联系我们",
    "footer.email": "邮箱",
    "footer.rights": `© ${currentYear} Soyotube. 保留所有权利。`,

    // 隐私政策
    "privacy.title": "隐私政策",
    "privacy.lastUpdated": "最后更新",

    // 服务条款
    "terms.title": "服务条款",
    "terms.lastUpdated": "最后更新",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy Policy",
    "nav.terms": "Terms of Service",

    // Hero content
    "hero.title": "Innovative App Development Studio",
    "hero.subtitle": "Focused on developing high-quality macOS applications",
    "hero.description":
      "We are committed to creating simple, efficient, and beautiful applications that provide users with exceptional digital experiences.",
    "hero.learnMore": "Learn More",
    "hero.viewDemo": "View Demo",

    // Product showcase
    "product.title": "Our Products",
    "product.pixor.title": "Pixor",
    "product.pixor.description":
      "A modern image viewer designed for macOS, supporting multiple image formats with smooth browsing experience.",
    "product.pixor.features":
      "• Support for multiple image formats\n• Fast preview and zoom\n• Clean and intuitive interface\n• High-performance image processing",
    "product.learnMore": "Learn More",
    "product.download": "Download",

    // Features
    "features.title": "Why Choose Us",
    "features.quality.title": "High-Quality Design",
    "features.quality.description":
      "Every app is carefully designed with attention to user experience and visual aesthetics.",
    "features.performance.title": "Excellent Performance",
    "features.performance.description": "Optimized code and efficient algorithms ensure smooth app performance.",
    "features.support.title": "Continuous Support",
    "features.support.description":
      "We provide continuous updates and technical support to ensure the best user experience.",

    // Testimonials
    "testimonials.title": "User Reviews",
    "testimonials.user1.name": "Mr. Zhang",
    "testimonials.user1.role": "Designer",
    "testimonials.user1.content":
      "Pixor is the best image viewer I've ever used, with a clean interface and powerful features.",
    "testimonials.user2.name": "Ms. Li",
    "testimonials.user2.role": "Photographer",
    "testimonials.user2.content":
      "As a photographer, I need to quickly preview large amounts of images, and Pixor perfectly meets my needs.",
    "testimonials.user3.name": "Mr. Wang",
    "testimonials.user3.role": "Developer",
    "testimonials.user3.content":
      "Soyotube's applications are of high quality, looking forward to more excellent products.",

    // Footer
    "footer.description":
      "Soyotube is a studio focused on innovative app development, committed to providing users with high-quality digital products.",
    "footer.quickLinks": "Quick Links",
    "footer.legal": "Legal",
    "footer.contact": "Contact Us",
    "footer.email": "Email",
    "footer.rights": `© ${currentYear} Soyotube. All rights reserved.`,

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last Updated",

    // Terms of Service
    "terms.title": "Terms of Service",
    "terms.lastUpdated": "Last Updated",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  useEffect(() => {
    // 从 localStorage 读取保存的语言设置
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    // 更新 HTML lang 属性
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
