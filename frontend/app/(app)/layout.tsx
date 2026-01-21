import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Sidebar />
      <Topbar />

      <main className="ml-64 pt-16 px-6">
        {children}
      </main>
    </div>
  )
}