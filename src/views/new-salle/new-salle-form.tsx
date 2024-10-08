'use client'

import { InputText } from "@/components/UI/input-text"
import { Content } from "@/components/content"
import { LegendFieldset } from "@/components/legend-fieldset"
import { CarIcon, HouseIcon, UserIcon } from "lucide-react"
import Link from "next/link"

export const NewSalleForm = () => {
  return (
    <form>
      <Content>
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

        <fieldset className="mt-8 flex flex-col gap-4">
          <LegendFieldset icon={CarIcon}>Veículo</LegendFieldset>
          <InputText type="text" placeholder="BT" />
          <InputText type="text" placeholder="Placa" />
          <InputText type="text" placeholder="Ano" />
          <InputText type="text" placeholder="Modelo" />
          <InputText type="text" placeholder="Cor" />
        </fieldset>

        <Link href="">
          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-green-400 p-4 text-neutral-600">Cadastrar venda</button>
        </Link>
      </Content>
    </form>
  )
}