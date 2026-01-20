import "./globals.css"
import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  )
}