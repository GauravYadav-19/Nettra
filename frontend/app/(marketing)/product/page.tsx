import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, BarChart3, Boxes, Brain } from "lucide-react"

export default function Product() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">What Nettra Does</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Nettra correlates application logs and network signals using AI to explain production incidents. It's
            designed for early-stage engineering teams who need deep insights without operational overhead.
          </p>
        </div>
      </section>

      {/* What It Does */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Incident Diagnosis Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "Correlate Signals",
              description:
                "Connect application logs, system metrics, and network data. Nettra automatically correlates patterns across all sources.",
            },
            {
              icon: Brain,
              title: "AI Analysis",
              description:
                "Our AI engine analyzes the correlated data to identify the root cause of the incident with high confidence.",
            },
            {
              icon: Boxes,
              title: "Evidence & Recommendations",
              description:
                "Get actionable insights with clear evidence trails. Every recommendation is backed by data and requires human approval.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-8 bg-card border-border">
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Example Incident */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Example: Database Connection Pool Exhaustion</h2>
        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-accent">Incident Summary</h3>
              <p className="text-muted-foreground">
                Your API service started returning 500 errors at 14:35 UTC on Jan 10, lasting 8 minutes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">Nettra's Analysis</h3>
              <div className="bg-primary/5 border border-border rounded p-4 space-y-2">
                <p className="text-sm">
                  <strong>Root Cause:</strong> Database connection pool exhaustion in the user service.
                </p>
                <p className="text-sm">
                  <strong>Evidence:</strong>
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Connection pool utilization jumped from 45% to 100% at 14:35:12</li>
                  <li>
                    • Application logs show "connection timeout" errors from the user service starting at 14:35:15
                  </li>
                  <li>• Network latency to database increased from 2ms to 150ms during the incident</li>
                  <li>
                    • Concurrent requests to /users endpoint increased 5x due to a cascading retry loop in the
                    recommendation service
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">Recommendations</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Increase connection pool size from 20 to 50 for the user service</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Add exponential backoff to the recommendation service retry logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Set up alerts when connection pool utilization exceeds 80%</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* What Nettra Does NOT Do */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">What Nettra Does NOT Do</h2>
        <Card className="p-8 bg-card border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Automatic Fixes",
                description:
                  "Nettra never modifies your infrastructure automatically. All changes require human approval.",
              },
              {
                title: "Write Access",
                description: "We operate with read-only access. Your production systems remain completely safe.",
              },
              {
                title: "Real-Time Alerts",
                description:
                  "Nettra focuses on post-incident analysis, not real-time alerting. Use your existing monitoring.",
              },
              {
                title: "Infrastructure Management",
                description:
                  "We don't manage deployments, scaling, or orchestration. We analyze what already happened.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Built for Small Teams */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Perfect for Early-Stage Engineering Teams</h2>
        <div className="bg-card border border-border rounded-lg p-8 space-y-4">
          <p className="text-muted-foreground">
            Small engineering teams often lack the resources of large companies. You can't afford to spend hours
            debugging production incidents. Nettra bridges that gap.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>No need to hire a dedicated incident response specialist</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>Reduce mean time to resolution (MTTR) by 60-80%</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>Gain deep insights into production behavior</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>Simple integration with existing log storage and infrastructure</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">See How Nettra Works</h2>
        <p className="text-lg text-muted-foreground mb-8">Get a personalized demo for your engineering team.</p>
        <Link href="/contact">
          <Button size="lg">Request a Demo</Button>
        </Link>
      </section>
    </main>
  )
}
