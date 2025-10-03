import { Footer } from "@/components/footer"
import { Lock, Shield, Eye, AlertTriangle, Server, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ITSecurityPage() {
  const features = [
    {
      icon: Shield,
      title: "Threat Protection",
      description: "Advanced threat detection and prevention systems to safeguard against cyber attacks",
    },
    {
      icon: Lock,
      title: "Security Architecture",
      description: "Design and implement robust security frameworks tailored to your business needs",
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 monitoring and real-time threat intelligence to protect your infrastructure",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response protocols and recovery strategies to minimize security incidents",
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Secure your networks, servers, and cloud environments with enterprise-grade protection",
    },
    {
      icon: Users,
      title: "Security Awareness",
      description: "Train your team to recognize and respond to security threats effectively",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-red-900 via-red-800 to-rose-900 overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-8">
              <Lock className="w-10 h-10 text-red-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">IT Security Solutions</h1>
            <p className="text-xl text-red-100 mb-8">
              Comprehensive security solutions to protect your business from evolving cyber threats
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Secure Your Business
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-red-100 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Multi-Layer Security Approach</h2>
            <div className="space-y-4">
              {[
                {
                  layer: "Perimeter Security",
                  description: "Firewalls, intrusion detection, and network segmentation",
                },
                { layer: "Application Security", description: "Secure coding practices and vulnerability assessments" },
                { layer: "Data Security", description: "Encryption, access controls, and data loss prevention" },
                { layer: "Endpoint Security", description: "Device management, antivirus, and endpoint detection" },
                { layer: "Identity & Access", description: "Multi-factor authentication and privilege management" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.layer}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can protect your business with comprehensive security solutions
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
