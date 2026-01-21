"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import IncidentTabs from "./IncidentTabs"

type Incident = {
  id: string
  title: string
  status: "open" | "resolved"
  created_at: string
}

type Props = {
  incident: Incident | null
  open: boolean
  onClose: () => void
}

export default function IncidentDrawer({
  incident,
  open,
  onClose,
}: Props) {
  // ESC to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!incident) return null

  return (
    <div
      className={`
        fixed inset-0 z-40
        ${open ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {/* BACKDROP */}
      <div
        className={`
          absolute inset-0
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0"}
        `}
        onClick={onClose}
      />

      {/* DRAWER */}
      <aside
        className={`
          absolute right-0 top-0 h-full w-[420px]
          bg-black border-l border-white/10
          shadow-2xl
          transform transition-transform duration-300
          ease-[cubic-bezier(.22,1,.36,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
          pointer-events-auto
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/40">
              Incident
            </p>
            <h2 className="text-lg font-semibold text-white">
              {incident.id}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="h-[calc(100%-64px)] overflow-y-auto">
          <IncidentTabs incident={incident} />
        </div>
      </aside>
    </div>
  )
}