"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                S
              </div>
              <span className="text-xl font-bold text-foreground">Soyotube</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">{t("footer.description")}</p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:dscai.im@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("product.title")}
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("features.title")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.terms")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:dscai.im@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">{t("footer.rights")}</p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 sm:mt-0">
            Made with
            {" "}
            <Heart
              className="h-4 w-4 mx-1 text-red-500 animate-pulse"
              fill="currentColor"
              strokeWidth={0}
              aria-hidden
            />
            {" "}
            by Soyotube
          </p>
        </div>
      </div>
    </footer>
  )
}
