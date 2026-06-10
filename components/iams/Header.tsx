"use client"

import { Bell, LogOut, Search, User } from "lucide-react"

export function Header() {
  return (
    <header
      className="flex items-center h-14 px-4 gap-3 shadow-md"
      style={{ backgroundColor: "#546e7a" }}
    >
      {/* Search bar */}
      <div className="flex-1 max-w-lg relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
          style={{ color: "#90a4ae" }}
        />
        <input
          type="text"
          placeholder="トップページ"
          className="w-full pl-9 pr-4 py-2 text-sm rounded outline-none"
          style={{
            backgroundColor: "#607d8b",
            color: "#eceff1",
            border: "1px solid #78909c",
          }}
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bell icon */}
      <button
        className="relative flex items-center justify-center w-9 h-9 rounded-full transition-colors hover:opacity-80"
        style={{ backgroundColor: "#607d8b" }}
        aria-label="通知"
      >
        <Bell className="w-5 h-5 text-white" />
      </button>

      {/* User info */}
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded"
        style={{ backgroundColor: "#607d8b" }}
      >
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{ backgroundColor: "#78909c" }}
        >
          <User className="w-5 h-5 text-white" />
        </div>
        <div className="leading-tight">
          <div className="text-white text-xs font-medium">shomu001 福岡支社 USER</div>
          <div className="text-xs" style={{ color: "#b0bec5" }}>
            福岡支社
          </div>
        </div>
      </div>

      {/* Logout */}
      <button
        className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-white transition-colors hover:opacity-80"
        style={{ backgroundColor: "#e07060" }}
      >
        <LogOut className="w-4 h-4" />
        ログアウト
      </button>
    </header>
  )
}
