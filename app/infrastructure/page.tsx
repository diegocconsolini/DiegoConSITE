import { Footer } from "@/components/footer"
import { Server, Cloud, Database, Network, Cpu, HardDrive } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InfrastructurePage() {
  const capabilities = [
    {
      icon: Server,
      title: "Server Management",
      description: "Enterprise-grade server solutions with 99.9% uptime guarantee",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure designed for growth and flexibility",
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "High-performance database systems that handle massive workloads",
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Robust networking solutions ensuring seamless connectivity",
    },
    {
      icon: Cpu,
      title: "Performance Tuning",
      description: "Optimize system performance for maximum efficiency and speed",
    },
    {
      icon: HardDrive,
      title: "Disaster Recovery",
      description: "Comprehensive backup and recovery strategies to protect your data",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-8">
              <Server className="w-10 h-10 text-emerald-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Infrastructure Management</h1>
            <p className="text-xl text-emerald-100 mb-8">
              Building and maintaining the backbone of your digital operations
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Optimize Infrastructure
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Robust Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-8">Let's create a foundation that scales with your ambitions</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
