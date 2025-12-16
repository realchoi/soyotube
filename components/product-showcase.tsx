"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Zap, Palette, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProductShowcase() {
  const { t } = useLanguage()

  return (
    <section id="products" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
            {t("product.title")}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl text-pretty leading-relaxed">
            {t("product.picser.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-card to-muted border border-border overflow-hidden">
              <img
                src="/modern-macos-image-viewer-app-interface-with-elega.png"
                alt={t("product.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {t("product.badge.macOS")}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">
                {t("product.badge.released")}
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("product.picser.title")}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("product.picser.description")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("product.feature.preview.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("product.feature.preview.desc")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("product.feature.speed.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("product.feature.speed.desc")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Palette className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("product.feature.design.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("product.feature.design.desc")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("product.feature.privacy.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("product.feature.privacy.desc")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 dark:bg-[oklch(0.85_0.15_85)] dark:text-[oklch(0.08_0.012_85)] dark:hover:bg-[oklch(0.85_0.15_85)]/90"
              >
                <a
                  href="https://apps.apple.com/app/picser/id6752801625"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("product.download")}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="dark:border-[oklch(0.85_0.15_85)] dark:text-[oklch(0.85_0.15_85)] dark:hover:bg-[oklch(0.85_0.15_85)]/10 dark:hover:text-[oklch(0.85_0.15_85)] bg-transparent"
              >
                {t("hero.viewDemo")}
              </Button>
            </div>

            {/* Product Hunt Badge */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">{t("product.featuredOn")}</p>
              <a
                href="https://www.producthunt.com/products/picser-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-picser-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105 hover:opacity-90"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1028407&theme=light&t=1765868509238"
                  alt="Picser - A native, powerful, elegant image viewer designed for macOS. | Product Hunt"
                  width="250"
                  height="54"
                  className="dark:hidden"
                />
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1028407&theme=dark&t=1765868509238"
                  alt="Picser - A native, powerful, elegant image viewer designed for macOS. | Product Hunt"
                  width="250"
                  height="54"
                  className="hidden dark:block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
