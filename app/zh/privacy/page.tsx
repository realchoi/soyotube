import { Suspense } from "react"
import { PrivacyPolicyContent } from "@/components/privacy-policy-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyZhPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <PrivacyPolicyContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
