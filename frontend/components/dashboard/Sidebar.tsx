"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  AlertTriangle,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react"

const nav = [
  {
    label: "CORE",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Incidents", href: "/incidents", icon: AlertTriangle },
    ],
  },
  {
    label: "ANALYSIS",
    items: [
      { name: "Insights", href: "/insights", icon: BarChart3 },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  function logout() {
    localStorage.removeItem("nettra_token")
    document.cookie =
      "nettra_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    router.replace("/auth/login")
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 px-5 py-6">
      {/* LOGO */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="text-emerald-400">Nettra</span>
        </h1>
        <p className="text-xs text-white/40 mt-1">
          AI Incident Intelligence
        </p>
      </div>

      {/* NAV */}
      <nav className="space-y-8">
        {nav.map((section) => (
          <div key={section.label}>
            <p className="mb-3 text-xs font-medium tracking-widest text-white/40">
              {section.label}
            </p>

            <ul className="space-y-1">
              {section.items.map(({ name, href, icon: Icon }) => {
                const active = pathname === href

                return (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition
                        ${
                          active
                            ? "bg-yellow-400/10 text-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.25)]"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <Icon size={18} />
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* FOOT ACTIONS */}
      <div className="absolute bottom-6 left-5 right-5 space-y-2">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-md"
        >
          <Settings size={18} />
          Settings
        </Link>

        <button
          onClick={logout}
          className="flex w-full items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-md"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  )
}