"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Layers, Smartphone, Palette, Zap, Shield, Heart, Code, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const features = [
  {
    icon: Layers,
    title: "多格式支持",
    description: "支持 JPEG、PNG、HEIC、RAW 等所有主流图片格式，无需转换即可预览",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "极速性能",
    description: "采用原生 Swift 开发，充分利用 macOS 系统优化，提供流畅的浏览体验",
    color: "text-secondary",
  },
  {
    icon: Palette,
    title: "精美设计",
    description: "遵循 Apple 设计规范，提供简洁优雅的用户界面，完美融入 macOS 生态",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "隐私优先",
    description: "所有图片处理均在本地完成，不上传任何数据，保护您的隐私安全",
    color: "text-secondary",
  },
  {
    icon: Smartphone,
    title: "智能缩放",
    description: "智能适应不同尺寸图片，提供最佳的显示效果和缩放体验",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "用户至上",
    description: "基于用户反馈持续改进，致力于提供最佳的图片浏览体验",
    color: "text-secondary",
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl text-pretty leading-relaxed">
            我们专注于创造优质的用户体验，每一个细节都经过精心打磨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-background flex items-center justify-center ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">100%</div>
            <div className="text-sm text-muted-foreground">原生开发</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-foreground">10K+</div>
            <div className="text-sm text-muted-foreground">满意用户</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">0</div>
            <div className="text-sm text-muted-foreground">数据收集</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-foreground">4.9</div>
            <div className="text-sm text-muted-foreground">用户评分</div>
          </div>
        </div>
      </div>
    </section>
  )
}
