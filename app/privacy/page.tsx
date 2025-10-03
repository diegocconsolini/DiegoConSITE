import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
              <span className="text-gray-700">Privacy </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  DiegoCon ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you visit our website or use our
                  services.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Personal data (name, email address, phone number) that you voluntarily provide</li>
                  <li>Usage data (IP address, browser type, pages visited, time spent on pages)</li>
                  <li>Cookies and tracking technologies to enhance user experience</li>
                  <li>Business information when you engage our consulting services</li>
                </ul>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Communicate with you about our services, updates, and promotional offers</li>
                  <li>Process your transactions and manage your requests</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Business partners with your consent</li>
                  <li>Legal authorities when required by law</li>
                  <li>Third parties in connection with business transfers or mergers</li>
                </ul>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information. However, no method of transmission over the internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:{" "}
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
