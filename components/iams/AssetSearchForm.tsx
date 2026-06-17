"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

interface AssetSearchFormProps {
  assetLabel: string
}

function FormField({
  label,
  placeholder,
  required = false,
  fullWidth = false,
}: {
  label: string
  placeholder: string
  required?: boolean
  fullWidth?: boolean
}) {
  return (
    <div className={`flex items-center gap-4 ${fullWidth ? "col-span-2" : ""}`}>
      <div className="flex items-center gap-2 justify-end w-40 flex-shrink-0">
        {required && (
          <span
            className="text-xs font-bold text-white px-1.5 py-0.5 rounded"
            style={{ backgroundColor: "#d9604a" }}
          >
            必須
          </span>
        )}
        <span className="text-sm font-medium" style={{ color: "#3d5166" }}>
          {label}
        </span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-3 py-2 text-sm rounded outline-none transition-shadow focus:ring-2"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #c0d4dc",
          color: "#3d5166",
        }}
      />
    </div>
  )
}

function DateField({ label, required = false }: { label: string; required?: boolean }) {
  const today = new Date()
  const reiwa = today.getFullYear() - 2018
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")
  const [value, setValue] = useState(`令和${reiwa}年${month}月${day}日`)

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 justify-end w-40 flex-shrink-0">
        {required && (
          <span
            className="text-xs font-bold text-white px-1.5 py-0.5 rounded"
            style={{ backgroundColor: "#d9604a" }}
          >
            必須
          </span>
        )}
        <span className="text-sm font-medium" style={{ color: "#3d5166" }}>
          {label}
        </span>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-3 py-2 pr-9 text-sm rounded outline-none transition-shadow focus:ring-2 w-52"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #c0d4dc",
            color: "#3d5166",
          }}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
          aria-label="カレンダーを開く"
        >
          <Calendar className="w-4 h-4" style={{ color: "#6a8898" }} />
        </button>
      </div>
    </div>
  )
}

export function AssetSearchForm({ assetLabel }: AssetSearchFormProps) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ backgroundColor: "#d8e6ec", border: "1px solid #b0c8d4" }}
    >
      {/* Panel header */}
      <div className="px-5 py-2.5" style={{ backgroundColor: "#c4d4dc" }}>
        <span className="text-sm font-semibold" style={{ color: "#3d5166" }}>
          検索条件
        </span>
      </div>

      {/* Form body */}
      <div className="px-8 py-6 flex flex-col gap-5" style={{ backgroundColor: "#dce8ef" }}>
        {/* Row 1: 基準日 */}
        <DateField label="基準日" required />

        {/* Row 2: 情報資産名 / 識別ID */}
        <div className="grid grid-cols-2 gap-6">
          <FormField label="情報資産名" placeholder="情報資産名" />
          <FormField label="識別ID（資産名）" placeholder="識別ID（資産名）" />
        </div>

        {/* Row 3: 用途・利用目的 (full width) */}
        <div className="grid grid-cols-2 gap-6">
          <FormField label="用途・利用目的" placeholder="用途・利用目的" fullWidth />
        </div>

        {/* Row 4: 管理部署 / 管理責任者 */}
        <div className="grid grid-cols-2 gap-6">
          <FormField label="管理部署" placeholder="管理部署" />
          <FormField label="管理責任者" placeholder="管理責任者" />
        </div>

        {/* Row 5: 管理担当者 */}
        <div className="grid grid-cols-2 gap-6">
          <FormField label="管理担当者" placeholder="管理担当者" />
        </div>

        {/* Row 6: 出力対象Excel名称 (full width) */}
        <div className="grid grid-cols-2 gap-6">
          <FormField label="出力対象Excel名称" placeholder="出力対象Excel名称" fullWidth />
        </div>
      </div>
    </div>
  )
}
