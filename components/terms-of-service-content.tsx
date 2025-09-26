"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MarkdownRenderer } from "@/lib/markdown-renderer"

export function TermsOfServiceContent() {
  const { language, t } = useLanguage()
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true)
      try {
        const fileName = language === "zh" ? "terms-of-service-zh.md" : "terms-of-service-en.md"
        const response = await fetch(`/content/${fileName}`)
        if (response.ok) {
          const text = await response.text()
          setContent(text)
        } else {
          console.error("Failed to load terms of service content")
        }
      } catch (error) {
        console.error("Error loading terms of service:", error)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [language])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-border/50 shadow-lg">
        <CardContent className="p-8 md:p-12">
          <MarkdownRenderer content={content} />
        </CardContent>
      </Card>
    </div>
  )
}
