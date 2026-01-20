"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-lg hidden sm:inline">Nettra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/product" className="text-sm text-muted-foreground hover:text-foreground transition">
              Product
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>
            <Link href="/security" className="text-sm text-muted-foreground hover:text-foreground transition">
              Security
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition">
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
            </Link>
            <Button size="sm">View Pricing</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/product" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Product
            </Link>
            <Link href="/pricing" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/security" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              Security
            </Link>
            <Link href="/about" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/faq" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <Link href="/contact" className="block px-4 py-2">
              <Button variant="outline" size="sm" className="w-full mb-2 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
