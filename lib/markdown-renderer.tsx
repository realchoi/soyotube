import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

import { cn } from "@/lib/utils"

const BASE_COMPONENTS: Components = {
  h1: ({ className, ...props }) => (
    <h1 className={cn("text-4xl font-bold text-foreground mb-6 mt-8 first:mt-0", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn("text-2xl font-semibold text-foreground mb-4 mt-8", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("text-xl font-semibold text-foreground mb-3 mt-6", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("text-muted-foreground mb-4 leading-relaxed", className)} {...props} />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn("text-foreground font-semibold", className)} {...props} />
  ),
  em: ({ className, ...props }) => <em className={cn("italic", className)} {...props} />,
  ul: ({ className, ...props }) => (
    <ul className={cn("list-disc space-y-2 pl-6 text-muted-foreground", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("list-decimal space-y-2 pl-6 text-muted-foreground", className)} {...props} />
  ),
  li: ({ className, children, ...props }) => (
    <li className={cn("leading-relaxed", className)} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn("border-l-4 border-border/60 pl-4 italic text-muted-foreground", className)} {...props} />
  ),
  hr: ({ className, ...props }) => <hr className={cn("my-8 border-border", className)} {...props} />,
  a: ({ className, ...props }) => (
    <a className={cn("text-primary underline-offset-4 hover:underline break-words", className)} {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className={cn("w-full border-collapse text-muted-foreground", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn("border border-border bg-muted/40 px-4 py-2 text-left font-semibold", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td className={cn("border border-border px-4 py-2 align-top", className)} {...props} />
  ),
}

const REMARK_PLUGINS = [remarkGfm]
const RAW_PLUGINS = [rehypeRaw]

interface MarkdownRendererProps {
  content: string
  className?: string
  enableRawHtml?: boolean
  components?: Components
}

export function MarkdownRenderer({
  content,
  className,
  enableRawHtml = true,
  components,
}: MarkdownRendererProps) {
  const resolvedComponents = components ? { ...BASE_COMPONENTS, ...components } : BASE_COMPONENTS
  const rehypePlugins = enableRawHtml ? RAW_PLUGINS : undefined

  return (
    <div className={cn("markdown-body prose prose-lg max-w-none text-muted-foreground dark:prose-invert", className)}>
      <ReactMarkdown remarkPlugins={REMARK_PLUGINS} rehypePlugins={rehypePlugins} components={resolvedComponents}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
