import { Footer } from "@/components/footer"
import { Brain, Sparkles, TrendingUp, Zap, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AIConsultingPage() {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "Custom AI roadmaps aligned with your business objectives and industry landscape",
    },
    {
      icon: Sparkles,
      title: "Machine Learning Implementation",
      description: "Deploy cutting-edge ML models that learn and adapt to your unique challenges",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Transform data into actionable insights that drive strategic decision-making",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation that eliminates repetitive tasks and boosts efficiency",
    },
    {
      icon: Target,
      title: "AI Model Optimization",
      description: "Fine-tune existing AI systems for maximum performance and accuracy",
    },
    {
      icon: Lightbulb,
      title: "Innovation Workshops",
      description: "Collaborative sessions to discover AI opportunities within your organization",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full mb-8">
              <Brain className="w-10 h-10 text-cyan-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">AI Consulting Services</h1>
            <p className="text-xl text-cyan-100 mb-8">
              Harness the power of artificial intelligence to transform your business
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Start AI Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-cyan-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Embrace AI Innovation?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's explore how AI can unlock new possibilities for your organization
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-6 text-lg">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
