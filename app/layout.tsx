import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Soyotube - 创新应用开发工作室",
  description: "专注于开发优质 macOS 应用程序，包括 Picser 看图软件等创新产品",
  generator: "Soyotube Studio",
  keywords: ["Soyotube", "macOS应用", "Picser", "看图软件", "应用开发"],
  authors: [{ name: "Soyotube Studio" }],
  openGraph: {
    title: "Soyotube - 创新应用开发工作室",
    description: "专注于开发优质 macOS 应用程序，包括 Picser 看图软件等创新产品",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
