"use client"

import { useEffect, useState } from "react"
import IncidentTable from "@/components/dashboard/IncidentTable"
import IncidentFilters from "@/components/dashboard/IncidentFilters"

type Incident = {
  id: string
  title: string
  status: "open" | "resolved"
  created_at: string
}

/* 🧪 DEV MOCK DATA (auto-used if backend empty) */
const MOCK_INCIDENTS: Incident[] = [
  {
    id: "INC-1024",
    title: "API latency spike detected",
    status: "open",
    created_at: new Date().toISOString(),
  },
  {
    id: "INC-1023",
    title: "Database connection timeout",
    status: "resolved",
    created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
  },
  {
    id: "INC-1022",
    title: "Memory usage exceeded threshold",
    status: "open",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
]

export default function IncidentsPage() {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)

  // 🔍 Filters
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("all")

  useEffect(() => {
    const token = localStorage.getItem("nettra_token")
    if (!token) {
      setIncidents(MOCK_INCIDENTS)
      setLoading(false)
      return
    }

    fetch("http://127.0.0.1:8000/incidents", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIncidents(
          Array.isArray(data) && data.length > 0
            ? data
            : MOCK_INCIDENTS
        )
        setLoading(false)
      })
      .catch(() => {
        setIncidents(MOCK_INCIDENTS)
        setLoading(false)
      })
  }, [])

  // 🧠 FILTER LOGIC
  const filteredIncidents = incidents.filter((incident) => {
    const matchesQuery =
      incident.title.toLowerCase().includes(query.toLowerCase()) ||
      incident.id.toLowerCase().includes(query.toLowerCase())

    const matchesStatus =
      status === "all" ? true : incident.status === status

    return matchesQuery && matchesStatus
  })

  if (loading) {
    return <div className="p-8 text-white/40">Loading incidents…</div>
  }

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Incidents
        </h1>
        <p className="mt-1 text-sm text-white/40">
          Monitor and manage system incidents
        </p>
      </div>

      {/* 🔍 Filters */}
      <IncidentFilters
        query={query}
        setQuery={setQuery}
        status={status}
        setStatus={setStatus}
      />

      {/* 📋 Table */}
      <IncidentTable incidents={filteredIncidents} />
    </div>
  )
}