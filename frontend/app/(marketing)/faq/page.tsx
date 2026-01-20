import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      category: "Product",
      questions: [
        {
          q: "Is Nettra autonomous? Will it change my infrastructure?",
          a: "No. Nettra operates with read-only access and never modifies your infrastructure. It analyzes what happened and provides recommendations, but all decisions require human approval.",
        },
        {
          q: "Does Nettra monitor my systems in real-time?",
          a: "Nettra is designed for post-incident analysis, not real-time alerting. Use your existing monitoring tools for alerts, and Nettra for deep root-cause analysis when incidents occur.",
        },
        {
          q: "How long does analysis take?",
          a: "Once you share logs with Nettra, analysis typically completes in 5-15 minutes depending on the amount of data and complexity of the incident.",
        },
        {
          q: "Can Nettra analyze multi-service incidents?",
          a: "Yes. Nettra is designed to correlate signals across multiple services to find the true root cause, especially for complex distributed system incidents.",
        },
        {
          q: "What types of incidents can Nettra analyze?",
          a: "Nettra works best with performance degradation, errors, latency issues, and infrastructure failures. It analyzes logs, metrics, and network data to find root causes.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          q: "What access does Nettra need to my systems?",
          a: "Nettra requires read-only access to application logs, system metrics, and network data. It does NOT need access to databases, source code, API keys, or credentials.",
        },
        {
          q: "How is my data protected?",
          a: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain strict data isolation policies. Your data is never shared with other customers.",
        },
        {
          q: "How long do you keep my data?",
          a: "Data retention depends on your plan. Free: 24 hours. Pro: 90 days. Team: 365 days. Older data is automatically deleted.",
        },
        {
          q: "Do you send my data to third parties?",
          a: "No. Your data never leaves our platform. We don't share data with other services, vendors, or third parties.",
        },
        {
          q: "Can I export my data?",
          a: "Yes. On Team plan and above, you can export incidents and analyses in JSON/CSV format. Contact us for details.",
        },
      ],
    },
    {
      category: "Implementation",
      questions: [
        {
          q: "How long does integration take?",
          a: "Basic integration takes 30-60 minutes. You provide API keys for your log storage, and Nettra handles the rest.",
        },
        {
          q: "What integrations do you support?",
          a: "We support major log platforms (Datadog, ELK, CloudWatch, Grafana Loki) and can work with custom log endpoints via API.",
        },
        {
          q: "Do I need to install anything on my servers?",
          a: "No. Nettra is fully cloud-based. You only provide API credentials for read-only access to your logs and metrics.",
        },
        {
          q: "Can Nettra integrate with our existing monitoring?",
          a: "Yes. Nettra complements your existing stack (Datadog, New Relic, Prometheus, etc.). It's not a replacement for monitoring.",
        },
        {
          q: "What if we're not ready to integrate?",
          a: "Start with the Free plan and upload sample logs manually. No integration required to explore Nettra's capabilities.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          q: "Can I upgrade or downgrade anytime?",
          a: "Yes. Changes take effect at the end of your billing cycle. No penalties or lock-in contracts.",
        },
        {
          q: "Do you offer a free trial?",
          a: "Yes. The Free plan is forever free with 1 service and 24-hour log retention. Upgrade when you need more.",
        },
        {
          q: "Is there a long-term commitment?",
          a: "No. All plans are month-to-month with no long-term contracts. Cancel anytime.",
        },
        {
          q: "Do you offer discounts for annual billing?",
          a: "Yes. Contact our sales team for custom pricing on annual commitments.",
        },
        {
          q: "What happens if I exceed my plan limits?",
          a: "We'll notify you before overage charges. You can upgrade instantly or pause new data collection.",
        },
      ],
    },
    {
      category: "Comparison",
      questions: [
        {
          q: "How is Nettra different from monitoring tools like Datadog?",
          a: "Monitoring tools help you detect problems. Nettra helps you understand why they happened. Use both together.",
        },
        {
          q: "How is Nettra different from APM tools?",
          a: "APM tools show you what's happening now. Nettra analyzes what happened and why. Nettra is specifically designed for root-cause analysis.",
        },
        {
          q: "Is Nettra a replacement for SREs?",
          a: "No. Nettra augments your team by providing deep insights. You still make decisions. We just make debugging faster.",
        },
        {
          q: "How does Nettra compare to other AI incident tools?",
          a: "We focus on human-in-the-loop analysis with read-only access. No autonomous actions. Every recommendation includes evidence.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          q: "What support is included with each plan?",
          a: "Free: Community support. Pro: Email support. Team: Phone + Email support with SLA guarantees.",
        },
        {
          q: "What's your average response time?",
          a: "Free/Pro: 1-2 business days. Team: 4-hour SLA. Critical security issues: 1-hour response.",
        },
        {
          q: "Can I get a dedicated account manager?",
          a: "Yes. Team plan customers get a dedicated success manager.",
        },
        {
          q: "Do you offer custom development or integrations?",
          a: "Yes. Contact our sales team for enterprise features and custom solutions.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Can't find what you're looking for? Email us at hello@nettra.ai
          </p>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
            <Card className="bg-card border-border">
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${sectionIdx}-${idx}`}
                    className="border-b border-border last:border-b-0"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-primary/5 transition">
                      <span className="text-left font-semibold">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        ))}
      </section>

      {/* Still Have Questions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Card className="p-8 bg-card border-border">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is happy to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <a href="/contact" className="inline-block">
            <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Contact Us
            </button>
          </a>
        </Card>
      </section>
    </main>
  )
}
