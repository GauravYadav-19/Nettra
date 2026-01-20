export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-28">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto mb-24">
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight">
          Pricing built for Indian teams
        </h1>
        <p className="mt-6 text-lg text-white/60">
          Start free. Upgrade only when you’re shipping to production.
          Transparent pricing in INR. No surprises.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col backdrop-blur">
          <h3 className="text-xl font-medium">Free</h3>
          <p className="text-white/50 mt-1">For learning & experimentation</p>

          <div className="mt-6 text-4xl font-semibold">
            ₹0<span className="text-base text-white/50"> / month</span>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-white/70">
            <li>✓ 1 service monitored</li>
            <li>✓ 24h log retention</li>
            <li>✓ Basic incident analysis</li>
            <li>✓ Community support</li>
          </ul>

          <button className="mt-auto pt-10">
            <div className="w-full rounded-lg bg-white text-black py-3 font-medium hover:bg-neutral-200 transition">
              Get Started
            </div>
          </button>
        </div>

        {/* Pro */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-emerald-400">
          <div className="rounded-2xl bg-black p-8 flex flex-col h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium">Pro</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300">
                Most Popular
              </span>
            </div>

            <p className="text-white/50 mt-1">For startups shipping weekly</p>

            <div className="mt-6 text-4xl font-semibold text-emerald-300">
              ₹999<span className="text-base text-white/50"> / month</span>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li>✓ Up to 5 services</li>
              <li>✓ 14 day log retention</li>
              <li>✓ AI root cause detection</li>
              <li>✓ Advanced incident analysis</li>
              <li>✓ Slack & email alerts</li>
            </ul>

            <button className="mt-auto pt-10">
              <div className="w-full rounded-lg bg-emerald-400 text-black py-3 font-medium hover:bg-emerald-300 transition">
                Start Pro Trial
              </div>
            </button>
          </div>
        </div>

        {/* Team */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col backdrop-blur">
          <h3 className="text-xl font-medium">Team</h3>
          <p className="text-white/50 mt-1">For serious production workloads</p>

          <div className="mt-6 text-4xl font-semibold">
            ₹2,999<span className="text-base text-white/50"> / month</span>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-white/70">
            <li>✓ Up to 20 services</li>
            <li>✓ 30 day log retention</li>
            <li>✓ Team access & roles</li>
            <li>✓ Priority incident analysis</li>
            <li>✓ Slack + webhook integrations</li>
          </ul>

          <button className="mt-auto pt-10">
            <div className="w-full rounded-lg border border-white/20 py-3 font-medium hover:bg-white/10 transition">
              Upgrade to Team
            </div>
          </button>
        </div>
      </section>

      {/* Enterprise */}
      <section className="max-w-4xl mx-auto mt-28 text-center">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 backdrop-blur">
          <h3 className="text-3xl font-medium">Enterprise</h3>
          <p className="mt-4 text-white/60">
            Designed for scale, compliance & critical systems
          </p>

          <ul className="mt-8 space-y-2 text-sm text-white/70">
            <li>✓ Unlimited services</li>
            <li>✓ 90+ day log retention</li>
            <li>✓ Dedicated onboarding</li>
            <li>✓ SLA-backed support</li>
            <li>✓ Security & compliance reviews</li>
          </ul>

          <div className="mt-10">
            <button className="rounded-lg bg-white text-black px-10 py-3 font-medium hover:bg-neutral-200 transition">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}