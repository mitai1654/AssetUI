"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface AssetTabsProps {
  assetLabel: string
}

export function AssetTabs({ assetLabel }: AssetTabsProps) {
  const router = useRouter()
  const [leaving, setLeaving] = useState(false)

  function handleHomeClick() {
    setLeaving(true)
    // wait for fade-out animation (0.25s) then navigate
    setTimeout(() => {
      router.push("/")
    }, 250)
  }

  return (
    <div className="flex mb-5" style={{ borderBottom: "2px solid #b0c4cc" }}>
      <button
        onClick={handleHomeClick}
        className="px-6 py-2 text-sm font-medium rounded-t-sm transition-colors cursor-pointer"
        style={{
          backgroundColor: "#dce8ef",
          color: "#3d5166",
          border: "1px solid #b0c4cc",
          borderBottom: "none",
        }}
      >
        情報資産管理
      </button>
      <button
        className={`${leaving ? "animate-fade-out-down" : "animate-fade-in-up"} px-6 py-2 text-sm font-medium rounded-t-sm -mb-px`}
        style={{
          backgroundColor: "#546e7a",
          color: "#ffffff",
          border: "1px solid #546e7a",
          borderBottom: "2px solid #546e7a",
        }}
      >
        {assetLabel}
      </button>
    </div>
  )
}
