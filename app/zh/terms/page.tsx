import { Suspense } from "react"
import { TermsOfServiceContent } from "@/components/terms-of-service-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServiceZhPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <TermsOfServiceContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
