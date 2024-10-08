import { TechnicianOption } from "@/components/technician-option";
import { ClipboardPlusIcon, NotebookTabsIcon } from "lucide-react";

export default function ServiceOrder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-green-100 px-4">
      <TechnicianOption
        icon={ClipboardPlusIcon}
        title="Nova Ordem de Serviço"
        url="/ordens-servico/novo"
      />
      <TechnicianOption
        icon={NotebookTabsIcon}
        title="Consultar Ordens de Serviço"
        url="/ordens-servico/lista"
      />
    </div>
  )
}