import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function SolutionsPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-600">Transforming complex challenges into elegant, scalable solutions</p>
          </div>
        </div>
      </section>
      <ProblemSolutionSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
