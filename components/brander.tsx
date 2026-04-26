"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function Brander({
  brand,
}: {
  brand: {
    name: string
    logo: React.ReactNode
  }
}) {
  const [activeBrand, setActiveBrand] = React.useState(brand)

  if (!activeBrand) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href={'/'}>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-orange-500 text-sidebar-primary-foreground">
              {activeBrand.logo}
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{activeBrand.name}</span>
            </div>
          
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
