"use client"

import { useState } from "react"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    try {
      const res = await fetch("http://127.0.0.1:8000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.detail || "Signup failed")
      }

      window.location.href = "/auth/login"
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-white mb-6 text-center">
          Create your Nettra account
        </h1>

        {error && (
          <div className="mb-4 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full rounded-md bg-white text-black py-3 font-medium hover:bg-neutral-200 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-neutral-400 text-center mt-6">
          Already have an account?{" "}
          <a href="/auth/login" className="text-emerald-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}