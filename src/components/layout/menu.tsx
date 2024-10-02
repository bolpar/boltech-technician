import { BookTextIcon, ClipboardPlusIcon, HeadsetIcon, MapPinCheckIcon, MapPinIcon } from "lucide-react"

export const Menu = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-center gap-4 border-t-2 border-neutral-400 bg-neutral-200 px-6 py-4">
      <button className="rounded-lg bg-neutral-300 p-4"><HeadsetIcon className="text-neutral-600" /></button>
      <button className="rounded-lg bg-neutral-300 p-4"><MapPinIcon className="text-neutral-600" /></button>
      <button className="rounded-lg bg-neutral-300 p-4"><MapPinCheckIcon className="text-neutral-600" /></button>
      <button className="rounded-lg bg-neutral-300 p-4"><ClipboardPlusIcon className="text-neutral-600" /></button>
      <button className="rounded-lg bg-neutral-300 p-4"><BookTextIcon className="text-neutral-600" /></button>
    </footer>
  )
}