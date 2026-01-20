import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Nettra</h3>
            <p className="text-sm opacity-80">AI-powered incident intelligence for engineering teams.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/product" className="hover:opacity-100 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:opacity-100 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:opacity-100 transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/about" className="hover:opacity-100 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-100 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@nettra.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2026 Nettra. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
