"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import KpiGrid from "@/components/dashboard/KpiGrid"

type DashboardStats = {
  incidents: number
  open: number
  resolved: number
}

export default function DashboardPage() {
  const { user, loading, authenticated } = useAuth()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [statsLoading, setStatsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("nettra_token")
    if (!token) return

    fetch("http://127.0.0.1:8000/dashboard/summary", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats)
        setStatsLoading(false)
      })
      .catch(() => setStatsLoading(false))
  }, [])

  if (loading) {
    return <div className="p-8 text-neutral-400">Loading...</div>
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="mt-1 text-neutral-400">
            Logged in as <span className="text-white">{user.email}</span>
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("nettra_token")
            document.cookie =
              "nettra_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
            window.location.href = "/auth/login"
          }}
          className="px-4 py-2 rounded-md bg-red-600/90 hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>

      {/* KPI Cards */}
      {statsLoading ? (
        <div className="text-neutral-500">Loading metrics…</div>
      ) : stats ? (
        <KpiGrid stats={stats} />
      ) : (
        <div className="text-neutral-500">No data available</div>
      )}
    </div>
  )
}