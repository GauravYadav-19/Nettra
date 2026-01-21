"use client"

import { useState } from "react"

export type Notification = {
  id: string
  title: string
  description?: string
  time: string
  read?: boolean
}

export function useNotifications() {
  const [open, setOpen] = useState(false)

  // TEMP mock data (later replace with API)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "New incident detected",
      description: "API latency spike on /auth",
      time: "2 mins ago",
      read: false,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  return {
    open,
    setOpen,
    notifications,
    unreadCount,
  }
}