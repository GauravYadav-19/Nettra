/* 
This answers:
“What exactly broke?”
*/
type Incident = {
  id: string
}

export default function LogsTab({
  incident,
}: {
  incident: Incident
}) {
  const logs = [
    "GET /api/v1/users → 504 Gateway Timeout",
    "Upstream service auth-service not responding",
    "Retry attempt 1 failed",
    "Retry attempt 2 failed",
    "Circuit breaker opened",
  ]

  return (
    <div className="rounded-lg border border-white/10 bg-black p-4 font-mono text-xs text-white/70 space-y-2">
      {logs.map((log, i) => (
        <div key={i} className="text-white/60">
          <span className="text-white/40 mr-2">
            {String(i + 1).padStart(2, "0")}
          </span>
          {log}
        </div>
      ))}
    </div>
  )
}