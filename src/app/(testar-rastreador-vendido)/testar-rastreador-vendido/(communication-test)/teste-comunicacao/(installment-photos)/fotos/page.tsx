'use client'

import { InputText } from "@/components/UI/input-text";
import { AlertDialog } from "@/components/alert-dialog";
import { LegendFieldset } from "@/components/legend-fieldset";
import { PictureInput } from "@/components/picture-input";
import { Separator } from "@/components/separator";
import { ImagesIcon } from "lucide-react";
import Image from "next/image";

export default function InstallmentsPhotos() {
  return (
    <form className="flex w-full flex-col bg-green-100 px-4 pb-48 pt-8">
      <Image src="/boltech-logo.png" alt="Boltech logo" width={150} height={80} className="m-auto mb-10" />

      <fieldset className="mb-4 flex flex-col gap-4">
        <LegendFieldset icon={ImagesIcon}>Fotos da Instalação</LegendFieldset>
        <InputText type="text" placeholder="Instalador" />
        <InputText type="text" placeholder="BT" />
        <InputText type="text" placeholder="Placa" />
      </fieldset>

      <Separator />
      <PictureInput title="+ Adicionar Foto da Placa..." placeholder="Observações da placa..." />
      <Separator />
      <PictureInput title="+ Adicionar Foto do Rastreador..." placeholder="Observações do rastreador..." />
      <Separator />
      <PictureInput title="+ Adicionar Foto da Porta Fusível..." placeholder="Observações da porta fusível..." />
      <Separator />
      <PictureInput title="+ Adicionar Foto da Rele..." placeholder="Observações da rele..." />
      <Separator />
      <AlertDialog title="Finalizando instalação..." description="Podendo ser bloqueado sem aviso prévio caso identificado inconscistencia nas informações fornecidas na instalação" onConfirm={() => console.log('Concluiu!')} />
    </form>
  )
}