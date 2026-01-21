"use client"

import { Incident } from "@/types/incident"
import StatusBadge from "./StatusBadge"
import SeverityBadge from "./SeverityBadge"

export default function IncidentsTable({
  incidents,
  loading,
}: {
  incidents: Incident[]
  loading: boolean
}) {
  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 p-6 text-white/50">
        Loading incidents…
      </div>
    )
  }

  if (incidents.length === 0) {
    return (
      <div className="rounded-xl border border-white/10 p-6 text-white/50">
        No incidents detected 🎉
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-white/5 text-white/60">
          <tr>
            <th className="px-4 py-3 text-left">Incident</th>
            <th className="px-4 py-3 text-left">Severity</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Source</th>
            <th className="px-4 py-3 text-left">Updated</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident) => (
            <tr
              key={incident.id}
              className="border-t border-white/5 hover:bg-white/5 transition cursor-pointer"
            >
              <td className="px-4 py-3 font-medium">
                {incident.title}
              </td>
              <td className="px-4 py-3">
                <SeverityBadge level={incident.severity} />
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={incident.status} />
              </td>
              <td className="px-4 py-3 capitalize text-white/60">
                {incident.source}
              </td>
              <td className="px-4 py-3 text-white/50">
                {incident.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}