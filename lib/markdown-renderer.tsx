import type { JSX } from "react/jsx-runtime"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split("\n")
    const elements: JSX.Element[] = []
    let currentIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={currentIndex++} className="text-4xl font-bold text-foreground mb-6 mt-8 first:mt-0">
            {line.substring(2)}
          </h1>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={currentIndex++} className="text-2xl font-semibold text-foreground mb-4 mt-8">
            {line.substring(3)}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={currentIndex++} className="text-xl font-semibold text-foreground mb-3 mt-6">
            {line.substring(4)}
          </h3>,
        )
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={currentIndex++} className="text-muted-foreground mb-4 font-semibold">
            {line.substring(2, line.length - 2)}
          </p>,
        )
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={currentIndex++} className="text-muted-foreground mb-2 ml-4 list-disc">
            {line.substring(2)}
          </li>,
        )
      } else if (line.startsWith("*") && line.endsWith("*") && line.length > 2) {
        elements.push(
          <p key={currentIndex++} className="text-sm text-muted-foreground italic mb-4 border-t pt-4 mt-8">
            {line.substring(1, line.length - 1)}
          </p>,
        )
      } else if (line.trim() === "---") {
        elements.push(<hr key={currentIndex++} className="my-8 border-border" />)
      } else if (line.trim() !== "") {
        elements.push(
          <p key={currentIndex++} className="text-muted-foreground mb-4 leading-relaxed">
            {line}
          </p>,
        )
      } else {
        elements.push(<div key={currentIndex++} className="mb-2" />)
      }
    }

    return elements
  }

  return <div className="prose prose-lg max-w-none">{renderMarkdown(content)}</div>
}
