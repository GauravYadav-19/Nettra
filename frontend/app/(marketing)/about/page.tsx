import { Card } from "@/components/ui/card"
import { Lightbulb, Users, Zap, Target } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Nettra</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building the future of incident response for engineering teams.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Production incidents are inevitable. But they shouldn't be a mystery. Every second spent debugging is a
            second your product is broken, your customers are frustrated, and your team is stressed.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that understanding what went wrong should be fast, clear, and accessible to every engineering
            team—not just those with armies of SREs. Nettra gives you superpowers to diagnose incidents in minutes, not
            hours.
          </p>
        </div>
      </section>

      {/* Why We Built Nettra */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Why We Built Nettra</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "The Problem",
              description:
                "Small engineering teams spend hours debugging production incidents. They lack the tooling and expertise of large enterprises.",
            },
            {
              icon: Users,
              title: "The Opportunity",
              description:
                "AI can correlate signals and find patterns humans might miss. But it must be transparent, safe, and human-in-the-loop.",
            },
            {
              icon: Target,
              title: "Our Approach",
              description:
                "Build a platform that combines AI intelligence with human judgment. No autonomous actions. Just insights and recommendations.",
            },
            {
              icon: Zap,
              title: "The Result",
              description:
                "Engineering teams reduce incident resolution time by 60-80% while maintaining complete control over their systems.",
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

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Philosophy</h2>
        <div className="space-y-6">
          {[
            {
              title: "Engineering-First",
              description:
                "We're built by engineers, for engineers. Every design decision is rooted in real incident debugging workflows.",
            },
            {
              title: "Simplicity Over Complexity",
              description:
                "We say 'no' to features that don't directly solve the core problem. Every feature earns its place.",
            },
            {
              title: "Trust is Everything",
              description:
                "We operate with read-only access and require human approval for all recommendations. Your systems remain completely safe.",
            },
            {
              title: "Early-Stage Friendly",
              description:
                "We're designed for small teams without large budgets or dedicated incident response specialists.",
            },
            {
              title: "Transparent & Observable",
              description:
                "You should understand exactly how Nettra arrived at its conclusions. Every recommendation includes evidence.",
            },
            {
              title: "No Vendor Lock-In",
              description: "Your data is yours. Export insights anytime. We're here to help, not to trap you.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Built by Engineers Who Get It</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          We've all been there at 2 AM, staring at logs, trying to figure out what went wrong. We're building the tool
          we always wished we had.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              role: "Co-Founder & CEO",
              bio: "15+ years of SRE and incident management at high-scale startups",
            },
            {
              role: "Co-Founder & Lead Engineer",
              bio: "Built observability infrastructure for millions of events per second",
            },
            {
              role: "Co-Founder & Product",
              bio: "Led product at observability company, focused on developer experience",
            },
          ].map((person, i) => (
            <Card key={i} className="p-6 bg-card border-border text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-1">{person.role}</h3>
              <p className="text-sm text-muted-foreground">{person.bio}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">We're Just Getting Started</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Want to join us in making incident debugging faster and easier?
        </p>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong>Feedback:</strong> Tell us what you need in incident intelligence.{" "}
            <a href="mailto:hello@nettra.ai" className="text-accent hover:text-accent/80">
              hello@nettra.ai
            </a>
          </p>
          <p>
            <strong>Opportunities:</strong> We're hiring. Check out our{" "}
            <a href="#" className="text-accent hover:text-accent/80">
              careers page
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
