import { Card } from "@/components/ui/card"
import { Lock, Shield, Eye, CheckCircle2 } from "lucide-react"

export default function Security() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Security & Trust</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nettra is built on the principle of minimal trust. We only observe, never modify. Your production systems
            are completely safe.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Security Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Eye,
              title: "Read-Only Access",
              description:
                "Nettra requires only read-only access to your logs and infrastructure. We never modify anything in your systems.",
            },
            {
              icon: Shield,
              title: "No Autonomous Actions",
              description:
                "Even if we identify a fix, we only recommend. All changes require explicit human approval and execution.",
            },
            {
              icon: Lock,
              title: "Data Isolation",
              description:
                "Your data is isolated and encrypted at rest. We use industry-standard encryption for all data in transit and at rest.",
            },
            {
              icon: CheckCircle2,
              title: "Zero Trust Model",
              description:
                "We implement zero-trust architecture. Every request is authenticated and authorized. No implicit trust.",
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

      {/* Access Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Access & Permissions Model</h2>
        <Card className="p-8 bg-card border-border">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-accent">What Nettra Can Access</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Application logs (read-only)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>System metrics and monitoring data (read-only)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Network traces and packet captures (read-only)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Infrastructure configuration (read-only for context)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-accent">What Nettra Can NOT Access</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">• Source code repositories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">• Customer data or PII</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">• SSH keys or API credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">• Database passwords or secrets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">• Configuration management systems</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Data Privacy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Data Privacy & Isolation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Encrypted in Transit",
              description:
                "All data transmitted to Nettra is encrypted using TLS 1.3. Man-in-the-middle attacks are impossible.",
            },
            {
              title: "Encrypted at Rest",
              description:
                "All data stored is encrypted using AES-256. Even if someone gains access to our storage, data is unreadable.",
            },
            {
              title: "Data Retention Policies",
              description:
                "We retain data only as long as necessary. Logs older than your plan retention period are automatically deleted.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Compliance & Certifications</h2>
        <Card className="p-8 bg-card border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                cert: "SOC 2 Type II",
                status: "In Progress",
                description: "Comprehensive security audit covering access, processing, and confidentiality.",
              },
              {
                cert: "GDPR Compliant",
                status: "Yes",
                description: "Full compliance with data protection regulations for EU users.",
              },
              {
                cert: "Data Processing Agreement",
                status: "Available",
                description: "DPA available for enterprise customers. Contact sales for details.",
              },
              {
                cert: "Incident Notification",
                status: "24-Hour SLA",
                description:
                  "Any data breach or security incident will be disclosed within 24 hours to affected customers.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-accent pl-4">
                <h3 className="font-semibold">{item.cert}</h3>
                <p className="text-sm text-accent mb-2">{item.status}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Authentication */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Authentication & Authorization</h2>
        <div className="space-y-6">
          {[
            {
              title: "API Key Authentication",
              description:
                "Credentials are issued as time-limited API keys. Keys can be rotated immediately if compromised.",
            },
            {
              title: "Role-Based Access Control",
              description: "Fine-grained RBAC ensures team members only see incidents relevant to their service.",
            },
            {
              title: "Audit Logging",
              description:
                "Every access to data is logged and auditable. You can see exactly who accessed what and when.",
            },
            {
              title: "IP Whitelisting",
              description: "Optional IP whitelisting allows you to restrict Nettra access to specific network ranges.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Security Questions?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          We take security seriously. If you have any questions, reach out to our security team.
        </p>
        <p className="text-sm text-muted-foreground">
          Email: <span className="text-foreground font-semibold">security@nettra.ai</span>
        </p>
      </section>
    </main>
  )
}
