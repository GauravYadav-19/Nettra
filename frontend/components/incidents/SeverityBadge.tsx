export default function SeverityBadge({
  level,
}: {
  level: "low" | "medium" | "high" | "critical"
}) {
  const colors = {
    low: "bg-emerald-500/15 text-emerald-400",
    medium: "bg-yellow-500/15 text-yellow-400",
    high: "bg-orange-500/15 text-orange-400",
    critical: "bg-red-500/15 text-red-400",
  }

  return (
    <span className={`rounded-md px-2 py-1 text-xs ${colors[level]}`}>
      {level.toUpperCase()}
    </span>
  )
}