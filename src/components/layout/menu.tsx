'use client'

import { BadgeDollarSignIcon, BookTextIcon, ClipboardPlusIcon, LocateFixedIcon, PackagePlusIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ElementType } from "react"
import { tv } from "tailwind-variants"

const button = tv({
  base: "rounded-lg p-4 hover:bg-neutral-400",
  variants: {
    color: {
      default: "bg-neutral-300",
      selected: "bg-neutral-500"
    }
  },

  defaultVariants: {
    color: "default"
  }
})

const icon = tv({
  variants: {
    color: {
      default: "text-neutral-600",
      selected: "text-neutral-300"
    }
  },

  defaultVariants: {
    color: "default"
  }
})

export const Menu = () => {
  const pathName = usePathname()

  if (pathName === '/') {
    return null
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-center gap-4 border-t-2 border-neutral-400 bg-neutral-200 px-6 py-4">
      <nav className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-center gap-4 border-t-2 border-neutral-400 bg-neutral-200 px-6 py-4">
        <NavItem url="/nova-venda" icon={PackagePlusIcon} />
        <NavItem url="/ordens-servico" icon={ClipboardPlusIcon} />
        <NavItem url="/testar" icon={LocateFixedIcon} />
        <NavItem url="/manuais-instalacao" icon={BookTextIcon} />
        <NavItem url="/finaceiro" icon={BadgeDollarSignIcon} />
      </nav>
    </nav>
  )
}

interface NavItemProps {
  url: string
  icon: ElementType
}

const NavItem = ({ url, icon: Icon }: NavItemProps) => {
  const pathName = usePathname()

  return (
    <Link href={url}>
      <button className={`${pathName.startsWith(url) ? button({ color: "selected" }) : button({ color: "default" })}`}>
        <Icon className={`${pathName.startsWith(url) ? icon({ color: "selected" }) : icon({ color: "default" })}`} />
      </button>
    </Link>
  )
}