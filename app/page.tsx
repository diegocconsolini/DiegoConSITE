import { HeroSection } from "@/components/hero-section"
import { AboutUsSection } from "@/components/about-us-section"
import { ServicesSection } from "@/components/services-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProblemSolutionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
