export default function StatusBadge({
  status,
}: {
  status: "open" | "investigating" | "resolved"
}) {
  const colors = {
    open: "bg-red-500/15 text-red-400",
    investigating: "bg-yellow-500/15 text-yellow-400",
    resolved: "bg-emerald-500/15 text-emerald-400",
  }

  return (
    <span className={`rounded-md px-2 py-1 text-xs ${colors[status]}`}>
      {status.toUpperCase()}
    </span>
  )
}