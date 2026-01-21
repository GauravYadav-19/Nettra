/*
This tab should answer:
“What happened?”
*/
type Incident = {
  id: string
  title: string
  status: "open" | "resolved"
  created_at: string
}

export default function OverviewTab({
  incident,
}: {
  incident: Incident
}) {
  return (
    <div className="space-y-6">
      {/* TITLE */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          {incident.title}
        </h3>
        <p className="mt-1 text-sm text-white/50">
          Incident ID: {incident.id}
        </p>
      </div>

      {/* METADATA */}
      <div className="grid grid-cols-2 gap-4">
        <Meta label="Status" value={incident.status} />
        <Meta
          label="Created"
          value={new Date(incident.created_at).toLocaleString()}
        />
        <Meta label="Severity" value="High" />
        <Meta label="Service" value="API Gateway" />
      </div>

      {/* SUMMARY */}
      <div>
        <p className="text-sm font-medium text-white/70 mb-2">
          Summary
        </p>
        <p className="text-sm text-white/50 leading-relaxed">
          A sudden spike in 5xx errors was detected on the primary API
          gateway. Requests began failing intermittently due to an
          upstream timeout.
        </p>
      </div>
    </div>
  )
}

function Meta({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-xs text-white/40">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">
        {value}
      </p>
    </div>
  )
}