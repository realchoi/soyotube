"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MarkdownRenderer } from "@/lib/markdown-renderer"

export function TermsOfServiceContent() {
  const { language, t } = useLanguage()
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadContent = async () => {
      setLoading(true)
      setError(null)
      try {
        const fileName = language === "zh" ? "terms-of-service-zh.md" : "terms-of-service-en.md"
        const response = await fetch(`/content/${fileName}`)
        if (!response.ok) {
          throw new Error(`Failed to fetch ${fileName}: ${response.status}`)
        }

        const text = await response.text()
        if (isMounted) {
          setContent(text)
        }
      } catch (err) {
        console.error("Failed to load terms of service content:", err)
        if (isMounted) {
          setError(t("error.terms.load"))
          setContent("")
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadContent()

    return () => {
      isMounted = false
    }
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
          {error ? (
            <div className="text-center text-sm text-destructive">{error}</div>
          ) : (
            <MarkdownRenderer content={content} />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
