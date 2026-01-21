type Status = "open" | "resolved"

const STATUS_STYLES: Record<
  Status,
  {
    text: string
    bg: string
    border: string
    glow: string
  }
> = {
  open: {
  text: "text-red-400",
  bg: "bg-red-500/10",
  border: "border-red-500/30",
  glow:
    "shadow-[0_0_12px_rgba(239,68,68,0.45)] animate-pulse",
},
  resolved: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_12px_rgba(16,185,129,0.25)]",
  },
}

export default function StatusBadge({ status }: { status: Status }) {
  const styles = STATUS_STYLES[status]

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium
      ${styles.text} ${styles.bg} ${styles.border} ${styles.glow}`}
    >
      {status === "open" ? "Open" : "Resolved"}
    </span>
  )
}