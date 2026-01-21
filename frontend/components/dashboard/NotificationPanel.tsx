"use client"

import { Notification } from "@/hooks/useNotifications"

export default function NotificationPanel({
  notifications,
}: {
  notifications: Notification[]
}) {
  return (
    <div className="absolute right-0 top-14 w-80 rounded-xl border border-white/10 bg-black shadow-xl">
      {notifications.length === 0 ? (
        <div className="px-4 py-6 text-sm text-white/40 text-center">
          No notifications
        </div>
      ) : (
        <div className="divide-y divide-white/10">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="px-4 py-3 hover:bg-white/5 transition"
            >
              <div className="text-sm font-medium text-white">
                {n.title}
              </div>

              {n.description && (
                <div className="text-xs text-white/60 mt-0.5">
                  {n.description}
                </div>
              )}

              <div className="mt-1 text-xs text-white/40">
                {n.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}