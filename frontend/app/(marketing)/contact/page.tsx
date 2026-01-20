"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about Nettra? Want to schedule a demo? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Mail,
              title: "Email",
              detail: "hello@nettra.ai",
              description: "Fastest way to reach us",
            },
            {
              icon: Phone,
              title: "Sales",
              detail: "+91 (940) 000-0000",
              description: "Call for pricing & demos",
            },
            {
              icon: MapPin,
              title: "Office",
              detail: "Bangalore, India",
              description: "Early-stage SaaS hub",
            },
          ].map((item, i) => (
            <Card key={i} className="p-8 bg-card border-border text-center">
              <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="font-semibold text-foreground mb-1">{item.detail}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto p-8 bg-card border-border">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary/5 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-primary/5 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-primary/5 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-primary/5 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition resize-none"
                placeholder="Tell us what you're interested in..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </section>

      {/* Expectations */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="p-8 bg-card border-border">
          <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong>Sales Inquiries:</strong> We'll respond within 1 business day with pricing information and a demo
              proposal.
            </p>
            <p>
              <strong>General Questions:</strong> Our team will get back to you within 2 business days with answers and
              next steps.
            </p>
            <p>
              <strong>Security Concerns:</strong> Please email security@nettra.ai directly for faster response.
            </p>
          </div>
        </Card>
      </section>
    </main>
  )
}
