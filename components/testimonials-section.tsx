"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const testimonialKeys = [
  {
    nameKey: "testimonials.user1.name",
    roleKey: "testimonials.user1.role",
    contentKey: "testimonials.user1.content",
    avatar: "/professional-photographer-avatar.jpg",
    rating: 5,
  },
  {
    nameKey: "testimonials.user2.name",
    roleKey: "testimonials.user2.role",
    contentKey: "testimonials.user2.content",
    avatar: "/ui-ux-designer-avatar.jpg",
    rating: 5,
  },
  {
    nameKey: "testimonials.user3.name",
    roleKey: "testimonials.user3.role",
    contentKey: "testimonials.user3.content",
    avatar: "/software-engineer-avatar.png",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialKeys.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length)
  }

  const currentTestimonial = testimonialKeys[currentIndex]

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
            {t("testimonials.sectionTitle")}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl text-pretty leading-relaxed">
            {t("testimonials.sectionSubtitle")}
          </p>
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
                    "{t(currentTestimonial.contentKey)}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={currentTestimonial.avatar || "/placeholder.svg"}
                        alt={t(currentTestimonial.nameKey)}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{t(currentTestimonial.nameKey)}</div>
                        <div className="text-sm text-muted-foreground">{t(currentTestimonial.roleKey)}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
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
              {testimonialKeys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
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
