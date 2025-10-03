import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main>
      <div className="relative min-h-screen bg-gradient-to-b from-white/60 to-purple-50/60 overflow-hidden">
        {/* Quantum field grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-700">Terms of </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using DiegoCon's website and services, you agree to be bound by these Terms of
                  Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  DiegoCon provides technology consulting services including IT Security, ICT Security, AI Consulting,
                  IT Compliance, and Infrastructure Management. The specific scope of services will be defined in
                  individual service agreements.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Not engage in any activity that disrupts or interferes with our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content, features, and functionality on our website are owned by DiegoCon and are protected by
                  international copyright, trademark, and other intellectual property laws. You may not reproduce,
                  distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Service Agreements</h2>
                <p className="text-gray-600 leading-relaxed">
                  Specific consulting engagements will be governed by separate service agreements that detail scope,
                  deliverables, timelines, and fees. These Terms of Service supplement but do not replace individual
                  service agreements.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  We maintain strict confidentiality regarding client information and project details. Both parties
                  agree to protect confidential information disclosed during the course of our engagement.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by law, DiegoCon shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from your use of our services. Our total
                  liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice,
                  for any breach of these Terms of Service or for any other reason at our sole discretion.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes
                  by posting the new Terms of Service on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the Netherlands, without
                  regard to its conflict of law provisions.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:{" "}
                  <a href="mailto:contact@diegocon.nl" className="text-purple-600 hover:text-purple-700">
                    contact@diegocon.nl
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
