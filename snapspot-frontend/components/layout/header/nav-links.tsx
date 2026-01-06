import Link from "next/link"

import { cn } from "@/lib/utils"

type NavItem = { label: string; href: string }

const NAV_ITEMS: NavItem[] = [
  { label: "작가 찾기", href: "/photographers" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "가격", href: "/pricing" },
  { label: "문의", href: "/contact" },
]

export function NavLinks({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}


