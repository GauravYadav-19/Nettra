"use client"

import { Bell } from "lucide-react"
import { usePathname } from "next/navigation"

function getTitle(pathname: string) {
  if (pathname.startsWith("/dashboard")) return "Dashboard"
  if (pathname.startsWith("/incidents")) return "Incidents"
  if (pathname.startsWith("/insights")) return "Insights"
  if (pathname.startsWith("/settings")) return "Settings"
  return ""
}

export default function Topbar() {
  const pathname = usePathname()
  

  return (
    <header className="sticky top-0 z-40 ml-64 h-16 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="flex h-full items-center justify-between px-6">
        <h1 className="text-lg font-semibold tracking-wide">
        
        </h1>

        {/* RIGHT — Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative text-white/60 hover:text-white transition">
            <Bell size={20} />
            {/* future badge */}
            {/* <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-yellow-400" /> */}
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-400/20 flex items-center justify-center text-sm font-medium text-emerald-400">
              G
            </div>
            <span className="text-sm text-white/70 hidden sm:block">
              Gaurav
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}