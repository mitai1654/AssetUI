"use client"

import {
  Home,
  Search,
  FolderOpen,
  Clock,
  Star,
  User,
  LogOut,
  Map,
} from "lucide-react"

const navItems = [
  { label: "ホーム", icon: Home, active: false },
  { label: "検索", icon: Search, active: false },
  { label: "情報資産管理", icon: FolderOpen, active: true },
  { label: "履歴", icon: Clock, active: false },
  { label: "お気に入り", icon: Star, active: false },
  { label: "プロフィール", icon: User, active: false },
  { label: "ログアウト", icon: LogOut, active: false },
]

export function Sidebar() {
  return (
    <aside
      className="flex flex-col w-52 min-h-screen flex-shrink-0"
      style={{ backgroundColor: "#e8f2f6", borderRight: "1px solid #c0d4dc" }}
    >
      {/* Logo area */}
      <div
        className="flex items-center gap-2 px-4 py-3 h-14"
        style={{ borderBottom: "1px solid #c0d4dc" }}
      >
        <div
          className="flex items-center justify-center w-10 h-10 rounded"
          style={{ backgroundColor: "#546e7a" }}
        >
          <Map className="w-6 h-6" style={{ color: "#80cbc4" }} />
        </div>
        <div className="leading-tight">
          <div className="font-bold text-base tracking-wide" style={{ color: "#2c3e50" }}>
            IAMS
          </div>
          <div className="text-xs" style={{ color: "#607d8b" }}>
            Asset Management
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col py-3" aria-label="メインナビゲーション">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              className="relative flex items-center gap-3 px-5 py-3 text-sm font-medium text-left transition-colors hover:opacity-70"
              style={{
                color: item.active ? "#2c3e50" : "#4a6070",
                backgroundColor: item.active ? "rgba(84,110,122,0.08)" : "transparent",
              }}
              aria-current={item.active ? "page" : undefined}
            >
              {/* Active left border indicator */}
              {item.active && (
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                  style={{ backgroundColor: "#546e7a" }}
                  aria-hidden="true"
                />
              )}
              <Icon
                className="w-5 h-5 flex-shrink-0"
                style={{ color: item.active ? "#546e7a" : "#6a8898" }}
              />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
