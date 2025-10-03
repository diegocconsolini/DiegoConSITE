import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-gray-950/95 text-white overflow-hidden">
      {/* Background quantum particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-20 w-2 h-2 bg-purple-400 rounded-full animate-float-1" />
        <div className="absolute top-20 right-32 w-3 h-3 bg-purple-500 rounded-full animate-float-2" />
        <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float-3" />
        <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float-1" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              <span className="text-gray-300">Diego</span>
              <span className="text-purple-500">Con</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where complex problems meet elegant solutions. Innovation solver for modern IT challenges.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/ict-security"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  ICT Security
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-consulting"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Infrastructure Management
                </Link>
              </li>
              <li>
                <Link
                  href="/it-compliance"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  IT Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/it-security"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  IT Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:contact@diegocon.nl" className="hover:text-purple-400 transition-colors duration-300">
                  contact@diegocon.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <p className="text-sm text-gray-400">© {currentYear} DiegoCon. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="#privacy"
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
