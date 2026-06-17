import { IamsShell } from "@/components/iams/IamsShell"
import { AssetSearchForm } from "@/components/iams/AssetSearchForm"
import { AssetTabs } from "@/components/iams/AssetTabs"
import { Search } from "lucide-react"

const assetLabelMap: Record<string, string> = {
  "physical": "物理的資産",
  "product-service": "製品・サービス",
  "information-data": "情報・データ",
  "facility": "設備",
  "personal-info": "個人情報",
  "human-asset": "人的資産",
}

interface PageProps {
  params: Promise<{ type: string }>
}

export default async function AssetDetailPage({ params }: PageProps) {
  const { type } = await params
  const assetLabel = assetLabelMap[type] ?? "情報資産"

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
          className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#546e7a" }}
        >
          <Search className="w-4 h-4" />
          メニュー検索
        </button>
      </div>

      {/* Tabs */}
      <AssetTabs assetLabel={assetLabel} />

      {/* Search form panel + button — fade in together */}
      <div className="animate-fade-in-up max-w-4xl">
        <AssetSearchForm assetLabel={assetLabel} />

        <div className="flex justify-center mt-6">
          <button
            className="flex items-center gap-2 px-8 py-2.5 text-sm font-medium rounded transition-all hover:opacity-90 active:scale-[0.98] shadow-sm"
            style={{
              backgroundColor: "#546e7a",
              color: "#ffffff",
            }}
          >
            <Search className="w-4 h-4" />
            検索
          </button>
        </div>
      </div>

    </IamsShell>
  )
}
