import { Header } from "@/components/iams/Header"
import { Sidebar } from "@/components/iams/Sidebar"

interface IamsShellProps {
  children: React.ReactNode
}

export function IamsShell({ children }: IamsShellProps) {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#8fa8b4" }}>
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  )
}
