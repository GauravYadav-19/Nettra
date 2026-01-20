"use client"

import { useEffect, useState } from "react"
import {
  AlertTriangle,
  CheckCircle2,
  BarChart3,
} from "lucide-react"

type KpiCardProps = {
  label: string
  value: number
  icon: React.ReactNode
  accent?: "emerald" | "yellow" | "red"
}

const ACCENT_MAP: Record<
  NonNullable<KpiCardProps["accent"]>,
  {
    text: string
    bg: string
    border: string
  }
> = {
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/40",
  },
  yellow: {
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "hover:border-yellow-500/40",
  },
  red: {
    text: "text-red-400",
    bg: "bg-red-500/10",
    border: "hover:border-red-500/40",
  },
}

/* =========================
   KPI CARD
========================= */
export function KpiCard({
  label,
  value,
  icon,
  accent = "emerald",
}: KpiCardProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let raf: number
    let start: number | null = null
    const duration = 600
    const target = Number.isFinite(value) ? value : 0

    function animate(ts: number) {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setDisplayValue(Math.round(progress * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }

    setDisplayValue(0)
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [value])

  const accentStyle = ACCENT_MAP[accent]

  return (
    <div
      className={`rounded-xl border border-white/10 bg-black p-5 transition-all duration-200 hover:-translate-y-0.5 ${accentStyle.border}`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`rounded-lg p-2 ${accentStyle.bg} ${accentStyle.text}`}
        >
          {icon}
        </div>

        <p className="text-3xl font-semibold">
          {displayValue}
        </p>
      </div>

      <p className="mt-3 text-sm text-white/60">
        {label}
      </p>
    </div>
  )
}

/* =========================
   KPI GRID (DEFAULT EXPORT)
========================= */
export default function KpiGrid({
  stats,
}: {
  stats: {
    incidents: number
    open: number
    resolved: number
  }
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <KpiCard
        label="Total Incidents"
        value={stats.incidents}
        accent="yellow"
        icon={<BarChart3 className="h-5 w-5" />}
      />

      <KpiCard
        label="Open Incidents"
        value={stats.open}
        accent="red"
        icon={<AlertTriangle className="h-5 w-5" />}
      />

      <KpiCard
        label="Resolved"
        value={stats.resolved}
        accent="emerald"
        icon={<CheckCircle2 className="h-5 w-5" />}
      />
    </div>
  )
}