'use client'

import { InputText } from "@/components/UI/input-text"
import { AlertDialog } from "@/components/alert-dialog"
import { Content } from "@/components/content"
import { LegendFieldset } from "@/components/legend-fieldset"
import { PictureInput } from "@/components/picture-input"
import { Separator } from "@/components/separator"
import { ImagesIcon, UserCog } from "lucide-react"

export const InstalmentPhotoForm = () => {
  return (
    <form>
      <Content>
        <fieldset className="mb-4 flex flex-col gap-4">
          <LegendFieldset icon={UserCog}>Dados da Instalação</LegendFieldset>
          <InputText type="text" placeholder="Instalador" />
          <InputText type="text" placeholder="BT" />
          <InputText type="text" placeholder="Placa" />
        </fieldset>

        <fieldset className="mt-4 w-full">
          <LegendFieldset icon={ImagesIcon}>Fotos da Instalação</LegendFieldset>
          <PictureInput title="+ Adicionar Foto da Placa..." placeholder="Observações da placa..." />
          <Separator />
          <PictureInput title="+ Adicionar Foto do Rastreador..." placeholder="Observações do rastreador..." />
          <Separator />
          <PictureInput title="+ Adicionar Foto da Porta Fusível..." placeholder="Observações da porta fusível..." />
          <Separator />
          <PictureInput title="+ Adicionar Foto da Rele..." placeholder="Observações da rele..." />
          <Separator />
          <AlertDialog onConfirm={() => console.log('Concluiu!')} title='Concluir instalação do "BT123456" com placa "ABC-1234"' description="O cadastro do cliente ficará em análise, sendo possível o bloqueio sem aviso prévio em inconcistência de informações fornecidas na instalação." />
        </fieldset>
      </Content>
    </form>
  )
}