"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Layers, Smartphone, Palette, Zap, Shield, Heart, Code, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Layers,
      titleKey: "features.multiFormat.title",
      descKey: "features.multiFormat.desc",
      color: "text-primary",
    },
    {
      icon: Zap,
      titleKey: "features.speed.title",
      descKey: "features.speed.desc",
      color: "text-secondary",
    },
    {
      icon: Palette,
      titleKey: "features.design.title",
      descKey: "features.design.desc",
      color: "text-primary",
    },
    {
      icon: Shield,
      titleKey: "features.privacy.title",
      descKey: "features.privacy.desc",
      color: "text-secondary",
    },
    {
      icon: Smartphone,
      titleKey: "features.zoom.title",
      descKey: "features.zoom.desc",
      color: "text-primary",
    },
    {
      icon: Heart,
      titleKey: "features.userFirst.title",
      descKey: "features.userFirst.desc",
      color: "text-secondary",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl text-pretty leading-relaxed">
            {t("features.subtitle")}
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
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{t(feature.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
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
            <div className="text-sm text-muted-foreground">{t("features.stats.native")}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-foreground">10K+</div>
            <div className="text-sm text-muted-foreground">{t("features.stats.users")}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">0</div>
            <div className="text-sm text-muted-foreground">{t("features.stats.dataCollection")}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-foreground">4.9</div>
            <div className="text-sm text-muted-foreground">{t("features.stats.rating")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
