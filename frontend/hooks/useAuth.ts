"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL!

export function useAuth() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("nettra_token")

    if (!token) {
  document.cookie =
    "nettra_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
  setAuthenticated(false)
  setLoading(false)
  router.replace("/auth/login")
  return
}

    async function loadUser() {
      try {
        const res = await fetch(`${API_BASE}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        // 🔥 HANDLE 401 HERE (correct place)
        if (res.status === 401) {
          localStorage.removeItem("nettra_token")
          document.cookie =
            "nettra_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
          setAuthenticated(false)
          setUser(null)
          router.replace("/auth/login")
          return
        }

        const data = await res.json()
        setUser(data)
        setAuthenticated(true)
      } catch (err) {
        setAuthenticated(false)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  return { user, loading, authenticated }
}