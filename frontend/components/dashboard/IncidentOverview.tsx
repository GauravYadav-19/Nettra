type Incident = {
  id: string
  title: string
  status: "open" | "resolved"
  created_at: string
}

export default function IncidentOverview({
  incident,
}: {
  incident: Incident
}) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h3 className="text-xl font-semibold">{incident.title}</h3>
        <p className="mt-1 text-sm text-white/40">
          Detected on {new Date(incident.created_at).toLocaleString()}
        </p>
      </div>

      {/* Status */}
      <div className="flex items-center gap-3">
        <span
          className={`
            rounded-full px-3 py-1 text-xs font-medium
            ${
              incident.status === "open"
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            }
          `}
        >
          {incident.status === "open" ? "Open" : "Resolved"}
        </span>

        <span className="text-xs text-white/40">
          Severity: Medium
        </span>
      </div>

      {/* AI Summary (placeholder but powerful) */}
      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-wide text-white/40 mb-2">
          AI Summary
        </p>
        <p className="text-sm leading-relaxed text-white/80">
          The system detected abnormal behavior patterns indicating a
          potential service degradation. Initial analysis suggests
          elevated response times exceeding historical baselines.
        </p>
      </div>
    </div>
  )
}