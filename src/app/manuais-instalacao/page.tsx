import { LegendFieldset } from "@/components/legend-fieldset"
import { ArrowDownToLineIcon, BookTextIcon } from "lucide-react"
import Image from "next/image"

export default function InstallationManual() {
  return (
    <div className="flex w-full flex-col bg-green-100 px-4 pb-48 pt-8">
      <Image
        src="/boltech-logo.png"
        alt="Boltech logo"
        width={150}
        height={80}
        className="m-auto mb-10"
      />

      <div className="flex flex-col gap-4">
        <LegendFieldset icon={BookTextIcon}>Manuais de Instalação</LegendFieldset>
        <Device title="GT08S" src="/tracker-1.png" />
        <Device title="LT02/LT08" src="/tracker-2.png" />
        <Device title="ET01/MT09" src="/tracker-3.png" />
      </div>
    </div>
  )
}

interface DeviceProps {
  title: string
  src: string
}

const Device = ({ title, src }: DeviceProps) => {
  return (
    <div className="mb-8 flex flex-col">
      <span className="m-auto text-neutral-600">{title}</span>
      <Image src={src} alt="Rastreador 1" width={300} height={300} className="m-auto mb-4" />
      <button className="flex w-full items-center justify-center gap-1 rounded-md bg-green-400 py-4 text-neutral-600"><ArrowDownToLineIcon />Baixar Manual</button>
    </div>
  )
}