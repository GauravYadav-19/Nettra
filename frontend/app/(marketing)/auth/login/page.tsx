"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL!
const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  /* ============================
     GITHUB LOGIN (REDIRECT ONLY)
  ============================ */
  function handleGithubLogin() {
    if (!GITHUB_CLIENT_ID) {
      setError("GitHub Client ID not configured")
      return
    }

    const redirectUri = "http://localhost:3000/auth/github/callback"

    window.location.href =
      `https://github.com/login/oauth/authorize` +
      `?client_id=${GITHUB_CLIENT_ID}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=user:email`
  }

  /* ============================
     EMAIL + PASSWORD LOGIN
  ============================ */
  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || "Invalid credentials")

      // 🔐 Store token (middleware + client)
      document.cookie = `nettra_token=${data.access_token}; path=/; max-age=604800`
      localStorage.setItem("nettra_token", data.access_token)

      router.replace("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  /* ============================
     UI
  ============================ */
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">
          Sign in to Nettra
        </h1>

        {error && (
          <div className="text-red-400 bg-red-500/10 p-3 rounded">
            {error}
          </div>
        )}

        <button
          onClick={handleGithubLogin}
          className="w-full py-3 rounded border border-white/30"
        >
          Continue with GitHub
        </button>

        <div className="text-center text-sm text-neutral-500">or</div>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-white/10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-white/10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            disabled={loading}
            className="w-full py-3 rounded bg-emerald-500 text-black"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}