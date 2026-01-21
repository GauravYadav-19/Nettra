"use client"

import { useEffect, useRef, useState } from "react"
import StatusBadge from "./StatusBadge"
import IncidentDrawer from "./IncidentDrawer"

type Incident = {
  id: string
  title: string
  status: "open" | "resolved"
  created_at: string
}

export default function IncidentTable({
  incidents,
}: {
  incidents: Incident[]
}) {
  const [selectedIncident, setSelectedIncident] =
    useState<Incident | null>(null)

  const tableRef = useRef<HTMLDivElement | null>(null)

  /* ✅ Clear selection when clicking outside BOTH table + drawer */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tableRef.current &&
        !tableRef.current.contains(event.target as Node)
      ) {
        setSelectedIncident(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      {/* ================= TABLE ================= */}
      <div
        ref={tableRef}
        className="overflow-hidden rounded-xl border border-white/10 bg-black"
      >
        <table className="w-full border-collapse">
          {/* ---------- TABLE HEAD ---------- */}
          <thead className="bg-white/5">
            <tr className="text-left text-sm text-white/60">
              <th className="w-1 px-0 py-3" />
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Created</th>
            </tr>
          </thead>

          {/* ---------- TABLE BODY ---------- */}
          <tbody>
            {incidents.map((incident) => {
              const isSelected =
                selectedIncident?.id === incident.id

              return (
                <tr
                  key={incident.id}
                  onClick={() => setSelectedIncident(incident)}
                  data-active={isSelected}
                  className="
                    group
                    relative
                    cursor-pointer
                    transition
                    hover:bg-yellow-400/5
                    hover:shadow-[0_0_0_1px_rgba(250,204,21,0.15)]
                    data-[active=true]:bg-yellow-400/10
                  "
                >
                  {/* LEFT ACCENT BAR */}
                  <td className="relative w-1 p-0">
                    <span
                      className="
                        absolute inset-y-0 left-0 w-[2px]
                        bg-yellow-400/70
                        opacity-0
                        group-hover:opacity-100
                        data-[active=true]:opacity-100
                        transition
                      "
                    />
                  </td>

                  <td className="px-5 py-4 text-sm text-white/60">
                    {incident.id}
                  </td>

                  <td className="px-5 py-4 font-medium text-white">
                    {incident.title}
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge status={incident.status} />
                  </td>

                  <td className="px-5 py-4 text-sm text-white/50">
                    {new Date(
                      incident.created_at
                    ).toLocaleString()}
                  </td>
                </tr>
              )
            })}

            {/* EMPTY STATE */}
            {incidents.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-white/40"
                >
                  No incidents found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= DRAWER ================= */}
      <IncidentDrawer
        incident={selectedIncident}
        open={!!selectedIncident}
        onClose={() => setSelectedIncident(null)}
      />
    </>
  )
}