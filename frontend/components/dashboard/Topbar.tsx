"use client"

import { Bell } from "lucide-react"
import { useNotifications } from "@/hooks/useNotifications"
import NotificationPanel from "./NotificationPanel"

export default function Topbar() {
  const { open, setOpen, notifications, unreadCount } =
    useNotifications()

  return (
    <header
      className="
        sticky top-0 z-40
        ml-64
        h-16
        border-b border-white/10
        bg-black/80 backdrop-blur
      "
    >
      <div className="flex h-full items-center justify-between px-6">
        {/* LEFT — intentionally empty (no Dashboard title) */}
        <div />

        {/* RIGHT — Actions */}
        <div className="relative flex items-center gap-4">
          {/* Notifications */}
          <button
            onClick={() => setOpen(!open)}
            className="relative text-white/60 hover:text-white transition"
          >
            <Bell size={20} />

            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-yellow-400 px-1 text-[10px] font-semibold text-black">
                {unreadCount}
              </span>
            )}
          </button>

          {open && (
            <NotificationPanel notifications={notifications} />
          )}

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