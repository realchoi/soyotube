"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "张小明",
    role: "摄影师",
    avatar: "/professional-photographer-avatar.jpg",
    content:
      "Pixor 完全改变了我的工作流程。作为一名摄影师，我需要快速预览大量的 RAW 文件，Pixor 的速度和质量让我印象深刻。界面设计也非常符合我的审美。",
    rating: 5,
  },
  {
    name: "李设计师",
    role: "UI/UX 设计师",
    avatar: "/ui-ux-designer-avatar.jpg",
    content:
      "作为设计师，我对软件的界面要求很高。Pixor 不仅功能强大，界面设计也非常优雅，完美融入了 macOS 的设计语言。这就是我一直在寻找的看图软件。",
    rating: 5,
  },
  {
    name: "王开发者",
    role: "软件工程师",
    avatar: "/software-engineer-avatar.png",
    content:
      "从技术角度来看，Pixor 的性能优化做得非常出色。即使是大尺寸的图片文件，也能瞬间加载。而且完全不用担心隐私问题，所有处理都在本地完成。",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
            用户怎么说
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl text-pretty leading-relaxed">听听我们用户的真实反馈</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Quote className="h-8 w-8 text-primary/60" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                        <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
