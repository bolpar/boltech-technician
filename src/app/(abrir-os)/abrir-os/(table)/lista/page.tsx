import { LegendFieldset } from "@/components/legend-fieldset";
import { BriefcaseBusinessIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function List() {
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
        <LegendFieldset icon={BriefcaseBusinessIcon}>Ordens de Serviço</LegendFieldset>

        <table className="table-fixed">
          <thead className="bg-green-500 py-4 text-white">
            <tr>
              <th className="border border-green-700 py-2">ID</th>
              <th className="border border-green-700 py-2">PLACA</th>
              <th className="border border-green-700 py-2">BT</th>
              <th className="border border-green-700 py-2">TIPO</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <tr key={index} className="border-y border-green-500 bg-green-200">
                  <td className="py-4 text-center text-sm text-neutral-700">654321</td>
                  <td className="py-4 text-center text-sm text-neutral-700">ABC-1234</td>
                  <td className="py-4 text-center text-sm text-neutral-700">BT-12345</td>
                  <td className="py-4 text-center text-sm text-neutral-700">Retirada</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <Link href="/">
        <button className="mt-8 w-full rounded-md bg-green-400 p-4 text-neutral-600">Prosseguir</button>
      </Link>

      <Link href="/">
        <button className="mt-2 w-full rounded-md bg-yellow-400 p-4 text-neutral-600">Pendente</button>
      </Link>
    </div>
  )
}