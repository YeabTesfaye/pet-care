"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold">PetCare</span>
          </Link>
        </div>
        <div className="flex flex-col space-y-3 mt-8">
          <Link href="/services" className="px-7 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/community" className="px-7 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
            Community
          </Link>
          <Link href="/resources" className="px-7 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
            Resources
          </Link>
          <Link href="/shop" className="px-7 py-2 text-lg font-medium" onClick={() => setOpen(false)}>
            Shop
          </Link>
          <div className="px-7 py-2">
            <Button asChild className="w-full" variant="outline">
              <Link href="/login" onClick={() => setOpen(false)}>
                Log in
              </Link>
            </Button>
          </div>
          <div className="px-7 py-2">
            <Button asChild className="w-full">
              <Link href="/register" onClick={() => setOpen(false)}>
                Sign up
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
