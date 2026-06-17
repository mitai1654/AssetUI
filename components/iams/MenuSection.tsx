import type { LucideIcon } from "lucide-react"
import Link from "next/link"

export interface MenuItem {
  label: string
  icon: LucideIcon
  href?: string
}

interface MenuSectionProps {
  title: string
  headerColor: string
  items: MenuItem[]
  decorationIcon?: React.ReactNode
}

export function MenuSection({
  title,
  headerColor,
  items,
  decorationIcon,
}: MenuSectionProps) {
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ backgroundColor: "#d8e6ec", border: "1px solid #b0c8d4" }}
    >
      {/* Section header */}
      <div className="px-4 py-2" style={{ backgroundColor: headerColor }}>
        <span className="text-white text-sm font-medium">{title}</span>
      </div>

      {/* Content area */}
      <div className="p-4 relative min-h-[100px]">
        {/* Items grid */}
        <div className="grid grid-cols-4 gap-3">
          {items.map((item, idx) => {
            const Icon = item.icon
            const baseClass =
              "flex items-center gap-2 px-3 py-3 rounded text-sm font-medium transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98] text-left"
            const baseStyle = {
              backgroundColor: "#ffffff",
              color: "#3d5166",
              border: "1px solid #c8d8e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }
            const content = (
              <>
                <Icon className="w-5 h-5 flex-shrink-0" style={{ color: "#6a8898" }} />
                <span className="text-balance leading-tight">{item.label}</span>
              </>
            )
            return item.href ? (
              <Link
                key={idx}
                href={item.href}
                className={baseClass}
                style={baseStyle}
              >
                {content}
              </Link>
            ) : (
              <button key={idx} className={baseClass} style={baseStyle}>
                {content}
              </button>
            )
          })}
        </div>

        {/* Decorative icon bottom-right */}
        {decorationIcon && (
          <div className="absolute bottom-3 right-4 opacity-25 pointer-events-none select-none">
            {decorationIcon}
          </div>
        )}
      </div>
    </div>
  )
}
