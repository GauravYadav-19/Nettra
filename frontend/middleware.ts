import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("nettra_token")?.value
  const { pathname } = req.nextUrl

  // 🔒 Protect dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/auth/login", req.url)
      )
    }
  }

  // 🚫 Prevent logged-in users from seeing auth pages
  if (pathname.startsWith("/auth")) {
    if (token) {
      return NextResponse.redirect(
        new URL("/dashboard", req.url)
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
}