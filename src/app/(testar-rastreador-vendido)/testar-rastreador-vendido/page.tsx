import { InputText } from "@/components/UI/input-text";
import { LegendFieldset } from "@/components/legend-fieldset";
import { HouseIcon, UserIcon } from "lucide-react";
import Image from "next/image";

export default function TestarRastreadorVendido() {
  return (
    <form className="flex w-full flex-col bg-green-100 px-4 pb-48 pt-8">
      <Image src="/boltech-logo.png" alt="Boltech logo" width={150} height={80} className="m-auto mb-10" />

      <fieldset className="flex flex-col gap-4">
        <LegendFieldset icon={UserIcon}>Informações Básicas</LegendFieldset>
        <InputText type="text" placeholder="Nome" />
        <InputText type="text" placeholder="CPF/CNPJ" />
        <InputText type="text" placeholder="Celular" />
        <InputText type="text" placeholder="E-mail" />
      </fieldset>

      <fieldset className="mt-8 flex flex-col gap-4">
        <LegendFieldset icon={HouseIcon}>Endereço</LegendFieldset>
        <InputText type="text" placeholder="CEP" />
        <InputText type="text" placeholder="Rua" />
        <InputText type="text" placeholder="Número" />
        <InputText type="text" placeholder="Complemento" />
        <InputText type="text" placeholder="Bairro" />
        <InputText type="text" placeholder="Cidade" />
        <InputText type="text" placeholder="UF" />
      </fieldset>

      <button className="mt-8 w-full rounded-md bg-green-400 p-4 text-neutral-600">Prosseguir</button>
    </form>
  )
}