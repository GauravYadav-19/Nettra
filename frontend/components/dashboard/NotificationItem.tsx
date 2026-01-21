import {Notification} from "@/hooks/useNotifications"

export default function NotificationItem({ n }: { n: Notification }) {
  return (
    <div
      className={`rounded-lg px-3 py-2 transition ${
        n.unread
          ? "bg-white/5 hover:bg-white/10"
          : "opacity-70 hover:opacity-100"
      }`}
    >
      <div className="text-sm font-medium">{n.title}</div>

      {n.description && (
        <div className="text-xs text-white/60 mt-0.5">
          {n.description}
        </div>
      )}

      <div className="mt-1 text-xs text-white/40">
        {n.time}
      </div>
    </div>
  )
}