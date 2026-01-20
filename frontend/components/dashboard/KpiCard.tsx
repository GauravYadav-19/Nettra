type Accent = "yellow" | "emerald" | "red"

const ACCENT_STYLES: Record<Accent, string> = {
  yellow:
    "border-yellow-400/30 bg-yellow-400/5 text-yellow-300 shadow-[0_0_0_1px_rgba(250,204,21,0.15)]",
  emerald:
    "border-emerald-400/30 bg-emerald-400/5 text-emerald-300 shadow-[0_0_0_1px_rgba(52,211,153,0.15)]",
  red:
    "border-red-400/30 bg-red-400/5 text-red-300 shadow-[0_0_0_1px_rgba(248,113,113,0.15)]",
}

export default function KpiCard({
  label,
  value,
  icon,
  accent = "yellow",
}: {
  label: string
  value: number
  icon: React.ReactNode
  accent?: Accent
}) {
  return (
    <div
      className={`
        relative rounded-xl border p-5
        transition-all duration-300
        hover:translate-y-[-2px]
        hover:shadow-xl
        ${ACCENT_STYLES[accent]}
      `}
    >
      {/* Icon */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium opacity-80">{label}</span>
        <div className="opacity-80">{icon}</div>
      </div>

      {/* Value */}
      <div className="mt-4 text-4xl font-semibold tracking-tight">
        {value}
      </div>

      {/* Subtle bottom glow line */}
      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
    </div>
  )
}