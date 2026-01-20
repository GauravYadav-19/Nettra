import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, AlertCircle, Eye, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-6">
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent font-medium">
            AI-Powered Incident Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Understand Why Your Production Systems Failed
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Nettra correlates application logs and network signals with AI to explain root causes, with evidence and
            recommendations. Human-in-the-loop, always.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Request Demo
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: AlertCircle,
              title: "Root Cause Analysis",
              description: "Correlate logs and network signals to pinpoint exactly what went wrong",
            },
            {
              icon: Eye,
              title: "Human-Controlled",
              description: "No autonomous actions. All recommendations require human approval",
            },
            {
              icon: Zap,
              title: "Production-Ready",
              description: "Read-only access with zero risk of unintended changes",
            },
            {
              icon: Check,
              title: "Early-Stage Friendly",
              description: "Built for small engineering teams who need deep insights",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-card border-border hover:border-accent/50 transition">
              <item.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Nettra Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Connect Your Systems",
              description: "Provide read-only access to your logs and infrastructure",
            },
            {
              step: "02",
              title: "Incident Occurs",
              description: "When something goes wrong in production",
            },
            {
              step: "03",
              title: "AI Correlates Data",
              description: "Analyze patterns across logs and network signals",
            },
            {
              step: "04",
              title: "Get Insights",
              description: "Receive actionable root cause analysis with evidence",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-bold text-accent/20 mb-2">{item.step}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              {i < 3 && <div className="hidden md:block absolute right-0 top-8 w-8 h-px bg-border" />}
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-card rounded-lg border border-border my-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Built for Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Read-Only Access",
              description: "Nettra never modifies your infrastructure. We only analyze and recommend.",
            },
            {
              title: "No Autonomous Actions",
              description: "Every insight requires human review and approval. You stay in control.",
            },
            {
              title: "Production Safe",
              description: "Zero risk approach designed for mission-critical systems.",
            },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Debug Production Faster?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join engineering teams using Nettra to understand incidents in minutes, not hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg">Contact Our Team</Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline">
              See Pricing Plans
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
