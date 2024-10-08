import { TechnicianOption } from "@/components/technician-option"
import { BadgeDollarSignIcon, BookTextIcon, ClipboardPlusIcon, LocateFixedIcon, PackagePlusIcon, ScrollTextIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-green-100 px-4 pb-4">
      <header className="mb-4 mt-4 border-b border-green-700 pb-2">
        <h1 className="text-3xl font-thin text-green-700">
          Olá, como podemos te ajudar hoje?
        </h1>
      </header>

      <TechnicianOption icon={PackagePlusIcon} title="Cadastrar nova venda" url="/nova-venda" />
      <TechnicianOption icon={LocateFixedIcon} title="Testar Rastreador" url="/testar" />
      <TechnicianOption icon={ClipboardPlusIcon} title="Abrir uma ordem de serviço" url="/ordens-servico/novo" />
      <TechnicianOption icon={ScrollTextIcon} title="Consultar ordens de serviço" url="/ordens-servico/lista" />
      <TechnicianOption icon={BookTextIcon} title="Manuais de instalação" url="/manuais-instalacao" />
      <TechnicianOption icon={BadgeDollarSignIcon} title="Financeiro" url="/financeiro" />
    </div>
  )
}
