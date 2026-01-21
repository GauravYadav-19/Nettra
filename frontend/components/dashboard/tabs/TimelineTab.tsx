/*
This answers:
“How did this incident unfold?”
*/ 
type Incident = {
  id: string
}

export default function TimelineTab({
  incident,
}: {
  incident: Incident
}) {
  const events = [
    {
      time: "02:11 AM",
      label: "Incident detected",
      desc: "Error rate crossed threshold",
    },
    {
      time: "02:13 AM",
      label: "Alert triggered",
      desc: "PagerDuty notification sent",
    },
    {
      time: "02:18 AM",
      label: "Mitigation started",
      desc: "Auto-scaling initiated",
    },
    {
      time: "02:26 AM",
      label: "Incident resolved",
      desc: "Error rate normalized",
    },
  ]

  return (
    <div className="space-y-6">
      {events.map((event, i) => (
        <div key={i} className="flex gap-4">
          {/* DOT */}
          <div className="relative">
            <div className="h-2 w-2 rounded-full bg-yellow-400 mt-2" />
            {i !== events.length - 1 && (
              <div className="absolute left-[3px] top-4 h-full w-px bg-white/10" />
            )}
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm text-white">
              {event.label}
            </p>
            <p className="text-xs text-white/40">
              {event.time} — {event.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}