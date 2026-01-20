"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"

interface Props {
  label: string
  href: string
  icon: LucideIcon
}

export default function SidebarItem({ label, href, icon: Icon }: Props) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition
        ${
          active
            ? "bg-emerald-500/10 text-emerald-400"
            : "text-white/70 hover:bg-white/5 hover:text-white"
        }
      `}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  )
}