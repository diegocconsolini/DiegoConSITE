import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { Footer } from "@/components/footer"

export default function SolutionsPage() {
  return (
    <main>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white/60 to-purple-50/60">
        {/* Background quantum field */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8 animate-fade-in px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="text-gray-700">Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Transforming complex challenges into elegant, scalable solutions
            </p>
          </div>
        </div>
      </section>
      <ProblemSolutionSection />
      <Footer />
    </main>
  )
}
