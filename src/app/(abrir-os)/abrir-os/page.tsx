import { InputText } from "@/components/UI/input-text";
import { LegendFieldset } from "@/components/legend-fieldset";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceOrder() {
  return (
    <form className="flex w-full flex-col bg-green-100 px-4 pb-48 pt-8">
      <Image src="/boltech-logo.png" alt="Boltech logo" width={150} height={80} className="m-auto mb-10" />

      <fieldset className="flex flex-col gap-4">
        <LegendFieldset icon={UserIcon}>Ordem de Serviço</LegendFieldset>
        <InputText type="text" placeholder="Nome Cliente" />
        <InputText type="text" placeholder="Telefone" />
        <InputText type="text" placeholder="E-mail" />
        <InputText type="text" placeholder="Placa" />
        <InputText type="text" placeholder="BT" />
        <InputText type="text" placeholder="Num O.S" />
        <InputText type="text" placeholder="Tipo" />
        <InputText type="text" placeholder="Descrição" />
        <InputText type="text" placeholder="Tempo Médio" />
        <InputText type="text" placeholder="Valor" />
      </fieldset>

      <Link href="/abrir-os/lista">
        <button className="mt-8 w-full rounded-md bg-green-400 p-4 text-neutral-600">Prosseguir</button>
      </Link>

      <Link href="/">
        <button className="mt-2 w-full rounded-md bg-yellow-400 p-4 text-neutral-600">Pendente</button>
      </Link>
    </form>
  )
}