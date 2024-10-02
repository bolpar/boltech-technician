import { BookTextIcon, ClipboardPlusIcon, HeadsetIcon, MapPinCheckIcon, MapPinIcon } from "lucide-react"
import Link from "next/link"
import { ElementType } from "react"

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-green-100 px-4">
      <TechnicianOption icon={HeadsetIcon} title="Atendimentos" />
      <TechnicianOption icon={MapPinIcon} title="Vendi um rastreador e preciso testar" />
      <TechnicianOption icon={MapPinCheckIcon} title="Preciso testar o rastreador do meu cliente" />
      <TechnicianOption icon={ClipboardPlusIcon} title="Abrir uma O.S" />
      <TechnicianOption icon={BookTextIcon} title="Manuais de instalação" />
    </div>
  )
}

const TechnicianOption = ({ title, icon: Icon }: { title: string, icon: ElementType }) => {
  return (
    <Link href="/" className="group w-full">
      <div className="flex w-full flex-col items-center gap-4 rounded-md border-b-2 border-blue-700 bg-blue-500 px-4 py-4 group-hover:bg-blue-600">
        <Icon className="text-blue-900" />
        <span className="text-white">{title}</span>
      </div>
    </Link>
  )
}