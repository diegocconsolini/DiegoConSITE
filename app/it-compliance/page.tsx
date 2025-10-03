import { Footer } from "@/components/footer"
import { FileCheck, Scale, BookOpen, ClipboardCheck, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ITCompliancePage() {
  const features = [
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Navigate complex regulations including GDPR, HIPAA, SOC 2, and industry-specific requirements",
    },
    {
      icon: BookOpen,
      title: "Policy Development",
      description: "Create comprehensive IT policies and procedures aligned with best practices and standards",
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Audits",
      description: "Thorough assessments to identify gaps and ensure adherence to regulatory frameworks",
    },
    {
      icon: FileText,
      title: "Documentation Management",
      description: "Maintain organized compliance documentation and evidence for audits and certifications",
    },
    {
      icon: FileCheck,
      title: "Risk Assessment",
      description: "Identify and evaluate compliance risks with actionable mitigation strategies",
    },
    {
      icon: Users,
      title: "Staff Training",
      description: "Educate your team on compliance requirements and best practices",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-8">
              <FileCheck className="w-10 h-10 text-green-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">IT Compliance Solutions</h1>
            <p className="text-xl text-green-100 mb-8">
              Navigate regulatory requirements with confidence and maintain continuous compliance
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-6 text-lg"
              >
                Get Compliant Today
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
                  className="p-6 rounded-xl border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Compliance Standards We Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "GDPR - General Data Protection Regulation",
                "HIPAA - Health Insurance Portability",
                "SOC 2 - Service Organization Control",
                "ISO 27001 - Information Security",
                "PCI DSS - Payment Card Industry",
                "NIST - Cybersecurity Framework",
              ].map((standard, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-700 font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Achieve Compliance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you meet regulatory requirements and maintain continuous compliance
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg">
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
