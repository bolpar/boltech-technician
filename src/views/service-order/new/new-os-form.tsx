'use client'

import Link from "next/link"

import { InputText } from "@/components/UI/input-text"
import { Content } from "@/components/content"
import { LegendFieldset } from "@/components/legend-fieldset"
import { ClipboardPlusIcon } from "lucide-react"

export const NewOsForm = () => {
  return (
    <form>
      <Content>
        <fieldset className="flex flex-col gap-4">
          <LegendFieldset icon={ClipboardPlusIcon}>Dados da Ordem de Serviço</LegendFieldset>
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

        <Link href="">
          <button className="mt-8 w-full rounded-md bg-green-400 p-4 text-neutral-600">Cadastrar</button>
        </Link>
      </Content>
    </form>
  )
}