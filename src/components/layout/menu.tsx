'use client'

import { BookTextIcon, ClipboardPlusIcon, HeadsetIcon, UserSearchIcon, WrenchIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Menu = () => {
  const pathName = usePathname()

  if (pathName === '/') {
    return null
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-center gap-4 border-t-2 border-neutral-400 bg-neutral-200 px-6 py-4">
      <Link href="/atendimentos">
        <button className="rounded-lg bg-neutral-300 p-4"><HeadsetIcon className="text-neutral-600" /></button>
      </Link>

      <Link href="/testar-rastreador-vendido">
        <button className="rounded-lg bg-neutral-300 p-4"><WrenchIcon className="text-neutral-600" /></button>
      </Link>

      <Link href="/testar-rastreador-cliente">
        <button className="rounded-lg bg-neutral-300 p-4"><UserSearchIcon className="text-neutral-600" /></button>
      </Link>

      <Link href="/abrir-os">
        <button className="rounded-lg bg-neutral-300 p-4"><ClipboardPlusIcon className="text-neutral-600" /></button>
      </Link>

      <Link href="/manuais-de-instalacao">
        <button className="rounded-lg bg-neutral-300 p-4"><BookTextIcon className="text-neutral-600" /></button>
      </Link>
    </footer>
  )
}