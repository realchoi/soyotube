"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

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
    "nav.testimonials": "用户评价",
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
    "product.picser.title": "Picser",
    "product.picser.description": "专为 macOS 设计的现代化看图软件，支持多种图片格式，提供流畅的浏览体验。",
    "product.picser.features": "• 支持多种图片格式\n• 快速预览和缩放\n• 简洁直观的界面\n• 高性能图片处理",
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

    // 产品展示额外文本
    "product.badge.released": "现已发布",
    "product.badge.macOS": "macOS 专用",
    "product.imageAlt": "Picser 看图软件界面",
    "product.feature.preview.title": "智能预览",
    "product.feature.preview.desc": "支持所有主流图片格式",
    "product.feature.speed.title": "极速加载",
    "product.feature.speed.desc": "原生性能优化",
    "product.feature.design.title": "精美界面",
    "product.feature.design.desc": "符合 macOS 设计语言",
    "product.feature.privacy.title": "隐私保护",
    "product.feature.privacy.desc": "本地处理，安全可靠",
    "product.featuredOn": "推荐于",

    // Hero 统计
    "hero.stats.activeUsers": "活跃用户",
    "hero.stats.rating": "用户评分",
    "hero.stats.satisfaction": "满意度",

    // Features 功能列表
    "features.subtitle": "我们专注于创造优质的用户体验，每一个细节都经过精心打磨",
    "features.multiFormat.title": "多格式支持",
    "features.multiFormat.desc": "支持 JPEG、PNG、HEIC、RAW 等所有主流图片格式，无需转换即可预览",
    "features.speed.title": "极速性能",
    "features.speed.desc": "采用原生 Swift 开发，充分利用 macOS 系统优化，提供流畅的浏览体验",
    "features.design.title": "精美设计",
    "features.design.desc": "遵循 Apple 设计规范，提供简洁优雅的用户界面，完美融入 macOS 生态",
    "features.privacy.title": "隐私优先",
    "features.privacy.desc": "所有图片处理均在本地完成，不上传任何数据，保护您的隐私安全",
    "features.zoom.title": "智能缩放",
    "features.zoom.desc": "智能适应不同尺寸图片，提供最佳的显示效果和缩放体验",
    "features.userFirst.title": "用户至上",
    "features.userFirst.desc": "基于用户反馈持续改进，致力于提供最佳的图片浏览体验",
    "features.stats.native": "原生开发",
    "features.stats.users": "满意用户",
    "features.stats.dataCollection": "数据收集",
    "features.stats.rating": "用户评分",

    // Testimonials 用户评价
    "testimonials.sectionTitle": "用户怎么说",
    "testimonials.sectionSubtitle": "听听我们用户的真实反馈",
    "testimonials.user1.name": "张小明",
    "testimonials.user1.role": "摄影师",
    "testimonials.user1.content": "Picser 完全改变了我的工作流程。作为一名摄影师，我需要快速预览大量的 RAW 文件，Picser 的速度和质量让我印象深刻。界面设计也非常符合我的审美。",
    "testimonials.user2.name": "李设计师",
    "testimonials.user2.role": "UI/UX 设计师",
    "testimonials.user2.content": "作为设计师，我对软件的界面要求很高。Picser 不仅功能强大，界面设计也非常优雅，完美融入了 macOS 的设计语言。这就是我一直在寻找的看图软件。",
    "testimonials.user3.name": "王开发者",
    "testimonials.user3.role": "软件工程师",
    "testimonials.user3.content": "从技术角度来看，Picser 的性能优化做得非常出色。即使是大尺寸的图片文件，也能瞬间加载。而且完全不用担心隐私问题，所有处理都在本地完成。",

    // Theme toggle
    "theme.toggle": "切换主题",

    // Error messages
    "error.privacy.load": "加载隐私政策内容时出现问题，请稍后再试。",
    "error.terms.load": "加载服务条款内容时出现问题，请稍后再试。",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.testimonials": "Testimonials",
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
    "product.picser.title": "Picser",
    "product.picser.description":
      "A modern image viewer designed for macOS, supporting multiple image formats with smooth browsing experience.",
    "product.picser.features":
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

    // Product showcase extra text
    "product.badge.released": "Available Now",
    "product.badge.macOS": "macOS Exclusive",
    "product.imageAlt": "Picser Image Viewer Interface",
    "product.feature.preview.title": "Smart Preview",
    "product.feature.preview.desc": "Supports all major image formats",
    "product.feature.speed.title": "Lightning Fast",
    "product.feature.speed.desc": "Native performance optimization",
    "product.feature.design.title": "Beautiful Design",
    "product.feature.design.desc": "Follows macOS design language",
    "product.feature.privacy.title": "Privacy Protection",
    "product.feature.privacy.desc": "Local processing, safe and secure",
    "product.featuredOn": "Featured on",

    // Hero stats
    "hero.stats.activeUsers": "Active Users",
    "hero.stats.rating": "User Rating",
    "hero.stats.satisfaction": "Satisfaction",

    // Features list
    "features.subtitle": "We focus on creating quality user experiences, with every detail carefully refined",
    "features.multiFormat.title": "Multi-Format Support",
    "features.multiFormat.desc": "Supports JPEG, PNG, HEIC, RAW and all major image formats without conversion",
    "features.speed.title": "Blazing Fast",
    "features.speed.desc": "Built with native Swift, fully optimized for macOS for smooth browsing",
    "features.design.title": "Beautiful Design",
    "features.design.desc": "Follows Apple design guidelines with clean, elegant UI that fits macOS",
    "features.privacy.title": "Privacy First",
    "features.privacy.desc": "All image processing is done locally, no data uploaded, protecting your privacy",
    "features.zoom.title": "Smart Zoom",
    "features.zoom.desc": "Intelligently adapts to different image sizes for optimal display and zoom",
    "features.userFirst.title": "User First",
    "features.userFirst.desc": "Continuously improved based on user feedback, committed to the best experience",
    "features.stats.native": "Native Built",
    "features.stats.users": "Happy Users",
    "features.stats.dataCollection": "Data Collection",
    "features.stats.rating": "User Rating",

    // Testimonials
    "testimonials.sectionTitle": "What Users Say",
    "testimonials.sectionSubtitle": "Hear real feedback from our users",
    "testimonials.user1.name": "Michael Zhang",
    "testimonials.user1.role": "Photographer",
    "testimonials.user1.content": "Picser has completely transformed my workflow. As a photographer, I need to quickly preview large amounts of RAW files, and Picser's speed and quality impressed me. The interface design also matches my aesthetics perfectly.",
    "testimonials.user2.name": "Ming Lee",
    "testimonials.user2.role": "UI/UX Designer",
    "testimonials.user2.content": "As a designer, I have high standards for software interfaces. Picser is not only powerful but also beautifully designed, perfectly integrating with macOS design language. This is the image viewer I've been looking for.",
    "testimonials.user3.name": "David Wang",
    "testimonials.user3.role": "Software Engineer",
    "testimonials.user3.content": "From a technical standpoint, Picser's performance optimization is outstanding. Even large image files load instantly. And there's no privacy concern since all processing is done locally.",

    // Theme toggle
    "theme.toggle": "Toggle theme",

    // Error messages
    "error.privacy.load": "Failed to load privacy policy. Please try again later.",
    "error.terms.load": "Failed to load terms of service. Please try again later.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const savedLanguage = localStorage.getItem("language") as Language
    let nextLanguage: Language | undefined

    if (pathname?.startsWith("/zh")) {
      nextLanguage = "zh"
    } else if (pathname === "/privacy" || pathname === "/terms") {
      nextLanguage = "en"
    } else if (savedLanguage === "zh" || savedLanguage === "en") {
      nextLanguage = savedLanguage
    }

    if (!nextLanguage) {
      nextLanguage = "zh"
    }

    setLanguageState((prev) => (prev === nextLanguage ? prev : nextLanguage))

    if (savedLanguage !== nextLanguage) {
      localStorage.setItem("language", nextLanguage)
    }
  }, [pathname])

  useEffect(() => {
    if (typeof document === "undefined") {
      return
    }
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en"
  }, [language])

  const resolveLocalizedPath = (currentPath: string, targetLanguage: Language): string => {
    if (!currentPath) {
      return currentPath
    }

    if (targetLanguage === "zh") {
      if (currentPath === "/privacy") {
        return "/zh/privacy"
      }
      if (currentPath === "/terms") {
        return "/zh/terms"
      }
      return currentPath
    }

    if (currentPath === "/zh/privacy") {
      return "/privacy"
    }
    if (currentPath === "/zh/terms") {
      return "/terms"
    }
    if (currentPath.startsWith("/zh/")) {
      const stripped = currentPath.replace(/^\/zh/, "")
      return stripped.length > 0 ? stripped : "/"
    }

    return currentPath
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguageState((prev) => (prev === lang ? prev : lang))

    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }

    const nextPath = resolveLocalizedPath(pathname ?? "", lang)
    if (nextPath && nextPath !== pathname) {
      router.push(nextPath)
    }
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
