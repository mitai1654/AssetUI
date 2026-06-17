import { IamsShell } from "@/components/iams/IamsShell"
import { MenuSection } from "@/components/iams/MenuSection"
import { Search, Server, Package, Cloud, Cpu, User, Users, ArrowUpDown, FileOutput } from "lucide-react"

function DotsDecoration() {
  return (
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, col) =>
        Array.from({ length: 6 }).map((_, row) => (
          <circle
            key={`${col}-${row}`}
            cx={col * 10 + 5}
            cy={row * 10 + 5}
            r={2}
            fill="#3d6070"
            opacity={0.55}
          />
        ))
      )}
    </svg>
  )
}

function OrgChartDecoration() {
  return (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none" aria-hidden="true">
      <rect x="33" y="2" width="24" height="14" rx="2" fill="#3d6070" opacity="0.5" />
      <line x1="45" y1="16" x2="45" y2="30" stroke="#3d6070" strokeWidth="2" opacity="0.5" />
      <line x1="15" y1="30" x2="75" y2="30" stroke="#3d6070" strokeWidth="2" opacity="0.5" />
      <line x1="15" y1="30" x2="15" y2="44" stroke="#3d6070" strokeWidth="2" opacity="0.5" />
      <rect x="3" y="44" width="24" height="14" rx="2" fill="#3d6070" opacity="0.5" />
      <line x1="45" y1="30" x2="45" y2="44" stroke="#3d6070" strokeWidth="2" opacity="0.5" />
      <rect x="33" y="44" width="24" height="14" rx="2" fill="#3d6070" opacity="0.5" />
      <line x1="75" y1="30" x2="75" y2="44" stroke="#3d6070" strokeWidth="2" opacity="0.5" />
      <rect x="63" y="44" width="24" height="14" rx="2" fill="#3d6070" opacity="0.5" />
    </svg>
  )
}

function LedgerDecoration() {
  return (
    <svg width="80" height="70" viewBox="0 0 80 70" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="50" height="55" rx="3" fill="none" stroke="#3d6070" strokeWidth="2" opacity="0.45" />
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={i} x1="5" y1={5 + (i + 1) * 11} x2="55" y2={5 + (i + 1) * 11} stroke="#3d6070" strokeWidth="1.5" opacity="0.4" />
      ))}
      <line x1="18" y1="5" x2="18" y2="60" stroke="#3d6070" strokeWidth="1.5" opacity="0.4" />
      <path d="M58 32 L72 32 M66 26 L72 32 L66 38" stroke="#3d6070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

const infoAssetItems = [
  { label: "物理的資産", icon: Server, href: "/assets/physical" },
  { label: "製品・サービス", icon: Package, href: "/assets/product-service" },
  { label: "情報・データ", icon: Cloud, href: "/assets/information-data" },
  { label: "設備", icon: Cpu, href: "/assets/facility" },
  { label: "個人情報", icon: User, href: "/assets/personal-info" },
  { label: "人的資産", icon: Users, href: "/assets/human-asset" },
]

const exportImportItems = [
  { label: "物理的資産（出力・取込）", icon: Server },
  { label: "製品・サービス（出力・取込）", icon: ArrowUpDown },
  { label: "情報・データ（出力・取込）", icon: Cloud },
  { label: "設備（出力・取込）", icon: Cpu },
  { label: "個人情報（出力・取込）", icon: User },
  { label: "人的資産（出力・取込）", icon: Users },
]

const ledgerItems = [
  { label: "情報資産台帳（出力）", icon: FileOutput },
]

export default function Page() {
  return (
    <IamsShell>
          {/* Search row */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="メニュー名称"
            className="pl-3 pr-4 py-2 text-sm rounded outline-none w-64 placeholder:text-[#8a9fac]"
            style={{
              backgroundColor: "#dce8ef",
              border: "1px solid #b0c4cc",
              color: "#3d5166",
            }}
          />
          <button
            className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-white transition-opacity hover:opacity-80 active:opacity-70"
            style={{ backgroundColor: "#546e7a" }}
          >
            <Search className="w-4 h-4" />
            メニュー検索
          </button>
        </div>

        {/* Active tab */}
        <div className="mb-4">
          <button
            className="px-6 py-2 text-sm font-medium rounded-sm transition-colors"
            style={{
              backgroundColor: "#dce8ef",
              color: "#3d5166",
              border: "1px solid #b0c4cc",
              borderBottom: "2px solid #546e7a",
            }}
          >
            情報資産管理
          </button>
        </div>

        {/* Menu sections */}
        <div className="flex flex-col gap-5 max-w-5xl">
          <MenuSection
            title="出力・管理"
            headerColor="#d9604a"
            items={infoAssetItems}
            decorationIcon={<DotsDecoration />}
          />

          <MenuSection
            title="出力・取込"
            headerColor="#4a9898"
            items={exportImportItems}
            decorationIcon={<OrgChartDecoration />}
          />

          <MenuSection
            title="台帳出力"
            headerColor="#7a8f9c"
            items={ledgerItems}
            decorationIcon={<LedgerDecoration />}
          />
        </div>
    </IamsShell>
  )
}
