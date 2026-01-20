"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL!

export default function GithubCallbackPage() {
  const router = useRouter()
  const params = useSearchParams()
  const code = params.get("code")

  useEffect(() => {
    if (!code) return

    async function exchangeCode() {
      try {
        const res = await fetch(`${API_BASE}/auth/github/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.detail || "GitHub login failed")

        // 🔐 Store token
        document.cookie = `nettra_token=${data.access_token}; path=/; max-age=604800`
        localStorage.setItem("nettra_token", data.access_token)

        router.replace("/dashboard")
      } catch (err) {
        router.replace("/auth/login")
      }
    }

    exchangeCode()
  }, [code, router])

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Signing you in with GitHub…
    </div>
  )
}