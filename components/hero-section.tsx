"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Star className="mr-2 h-4 w-4 fill-primary text-primary" />
            {t("hero.subtitle")}
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl text-pretty max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Ensure main button uses correct colors in dark mode */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg dark:bg-[oklch(0.85_0.15_85)] dark:text-[oklch(0.08_0.012_85)] dark:hover:bg-[oklch(0.85_0.15_85)]/90"
            >
              <Download className="mr-2 h-5 w-5" />
              {t("product.download")}
            </Button>
            {/* Ensure outline button has correct contrast in dark mode */}
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg bg-transparent dark:border-[oklch(0.85_0.15_85)] dark:text-[oklch(0.85_0.15_85)] dark:hover:bg-[oklch(0.85_0.15_85)]/10 dark:hover:text-[oklch(0.85_0.15_85)]"
            >
              {t("hero.learnMore")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.activeUsers")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.rating")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">99%</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.satisfaction")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>
    </section>
  )
}
