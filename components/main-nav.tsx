"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { PawPrint } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <PawPrint className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">PetCare</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/services"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/services" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Services
        </Link>
        <Link
          href="/community"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/community" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Community
        </Link>
        <Link
          href="/resources"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/resources" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Resources
        </Link>
        <Link
          href="/shop"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/shop" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Shop
        </Link>
      </nav>
    </div>
  )
}
