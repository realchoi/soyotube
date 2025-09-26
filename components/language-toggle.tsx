"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { Globe, ChevronDown } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-foreground w-20 justify-between hover:bg-muted hover:text-foreground dark:hover:bg-muted/60 data-[state=open]:bg-muted data-[state=open]:text-foreground dark:data-[state=open]:bg-muted/60"
        >
          <div className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language === "zh" ? "中" : "EN"}</span>
          </div>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem
          onClick={() => setLanguage("zh")}
          className={`cursor-pointer ${language === "zh" ? "bg-accent text-accent-foreground" : ""}`}
        >
          <span className="text-sm">中文</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${language === "en" ? "bg-accent text-accent-foreground" : ""}`}
        >
          <span className="text-sm">English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
