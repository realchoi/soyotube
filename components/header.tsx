"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { key: "home", label: t("nav.home"), href: "/", type: "link" as const },
    { key: "products", label: t("nav.products"), href: "#products", type: "anchor" as const },
    { key: "features", label: t("nav.features"), href: "#features", type: "anchor" as const },
    { key: "about", label: t("nav.about"), href: "#about", type: "anchor" as const },
    { key: "contact", label: t("nav.contact"), href: "#contact", type: "anchor" as const },
  ]

  const navItemClass =
    "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap text-muted-foreground hover:text-foreground hover:bg-muted/60"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              S
            </div>
            <span className="text-xl font-bold text-foreground">Soyotube</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link key={item.key} href={item.href} className={navItemClass}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.key} href={item.href} className={navItemClass}>
                  {item.label}
                </a>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-amber-400 dark:text-black dark:hover:bg-amber-500"
            >
              <a
                href="https://apps.apple.com/app/picser/id6752801625"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("product.download")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <Link key={item.key} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.key} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                ),
              )}
              <div className="flex items-center space-x-4 pt-4">
                <LanguageToggle />
                <ThemeToggle />
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-amber-400 dark:text-black dark:hover:bg-amber-500"
                >
                  <a
                    href="https://apps.apple.com/app/picser/id6752801625"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("product.download")}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
