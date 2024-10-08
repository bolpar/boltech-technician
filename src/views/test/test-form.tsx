'use client'

import { ActiveSwitch } from "@/components/UI/active-switch"
import { InputText } from "@/components/UI/input-text"
import { Content } from "@/components/content"
import { LegendFieldset } from "@/components/legend-fieldset"
import { ShieldCheckIcon, UserIcon } from "lucide-react"
import Link from "next/link"

export const TestForm = () => {
  return (
    <form>
      <Content>
        <fieldset className="flex flex-col gap-4">
          <LegendFieldset icon={ShieldCheckIcon}>Teste de Comunicação</LegendFieldset>
          <InputText type="text" placeholder="Placa" />
          <InputText type="text" placeholder="BT" />
          <button className="w-full rounded-md bg-green-400 p-4 text-neutral-600">Pesquisar</button>
        </fieldset>

        <div className="mt-8 flex items-center justify-center gap-2">
          <UserIcon />
          <h3 className="text-xl font-medium text-neutral-700">Gabriel Pedroso</h3>
        </div>

        <div className="mt-8 flex flex-col">
          <header className="m-auto flex gap-2">
            <span className="mb-2 rounded-full bg-green-300 px-2 py-1 text-sm font-medium text-neutral-600">01/04/2024 11:12:34</span>
            <span className="mb-2 rounded-full bg-green-300 px-2 py-1 text-sm font-medium text-neutral-600">Ligado</span>
            <span className="mb-2 rounded-full bg-green-300 px-2 py-1 text-sm font-medium text-neutral-600">Sinal: Ok</span>
          </header>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.266361811229!2d-49.23868432426493!3d-25.496161735513464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfadda1711df3%3A0xda6e5fc2fbc5fa43!2sR.%20Carlos%20de%20Laet%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1727880317802!5m2!1spt-BR!2sbr"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg border border-green-600"
          />
        </div>

        <div className="m-auto mt-4 flex flex-col items-center gap-1">
          <ActiveSwitch />
        </div>

        <Link href="/testar/fotos-instalacao" className="mt-8">
          <button className="w-full rounded-md bg-green-400 p-4 text-neutral-600">Iniciar instalação</button>
        </Link>
      </Content>
    </form>
  )
}