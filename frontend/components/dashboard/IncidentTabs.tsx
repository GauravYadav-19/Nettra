"use client"

import { useState } from "react"
import OverviewTab from "./tabs/OverviewTab"
import TimelineTab from "./tabs/TimelineTab"
import LogsTab from "./tabs/LogsTab"

type Incident = {
  id: string
  title: string
  status: "open" | "resolved"
  created_at: string
}

const TABS = ["overview", "timeline", "logs"] as const
type Tab = (typeof TABS)[number]

export default function IncidentTabs({
  incident,
}: {
  incident: Incident
}) {
  const [activeTab, setActiveTab] = useState<Tab>("overview")

  return (
    <div className="h-full flex flex-col">
      {/* ---------- TAB HEADER ---------- */}
      <div className="flex border-b border-white/10 px-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative px-4 py-3 text-sm capitalize transition
              ${
                activeTab === tab
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }
            `}
          >
            {tab}

            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-yellow-400" />
            )}
          </button>
        ))}
      </div>

      {/* ---------- TAB CONTENT ---------- */}
      <div className="flex-1 overflow-y-auto px-6 py-5">
        {activeTab === "overview" && (
          <OverviewTab incident={incident} />
        )}

        {activeTab === "timeline" && (
          <TimelineTab incident={incident} />
        )}

        {activeTab === "logs" && <LogsTab incident={incident} />}
      </div>
    </div>
  )
}