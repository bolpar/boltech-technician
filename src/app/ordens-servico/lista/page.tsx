import { LegendFieldset } from "@/components/legend-fieldset";
import { BriefcaseBusinessIcon } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

export default function List() {
  return (
    <div className="flex w-full flex-col bg-green-100 px-4 pb-28 pt-8">
      <Image
        src="/boltech-logo.png"
        alt="Boltech logo"
        width={150}
        height={80}
        className="m-auto mb-10"
      />

      <div className="flex flex-col gap-4">
        <LegendFieldset icon={BriefcaseBusinessIcon}>Ordens de Serviço</LegendFieldset>

        <header className="flex w-full items-center justify-between gap-2">
          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-b-4 border-green-500 bg-green-300 py-4">
            <label className="text-sm text-neutral-600">TOTAL</label>
            <span className="text-lg font-bold text-neutral-600">R$ 30,00</span>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-b-4 border-green-500 bg-green-300 py-4">
            <label className="text-sm text-neutral-600">RECEBIDO</label>
            <span className="text-lg font-bold text-neutral-600">R$ 40,00</span>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-b-4 border-green-500 bg-green-300 py-4">
            <label className="text-sm text-neutral-600">PENDENTE</label>
            <span className="text-lg font-bold text-neutral-600">R$ 10,00</span>
          </div>
        </header>

        <table className="table-fixed overflow-hidden rounded-lg">
          <thead className="bg-green-500 py-4 text-white">
            <tr>
              <th className="py-2 text-white">ID</th>
              <th className="py-2 text-white">PLACA</th>
              <th className="py-2 text-white">BT</th>
              <th className="py-2 text-white">TIPO</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, index) => {
              const color = index % 2 === 0 ? 'bg-green-500' : 'bg-yellow-500'

              return (
                <tr key={index} className="border-y-2 border-green-700 bg-white">
                  <td className="flex items-center gap-2 py-4 text-center text-sm text-neutral-700"><div className={`ml-2 h-2 w-2 rounded-full ${color}`} />654321</td>
                  <td className="py-4 text-center text-sm text-neutral-700">ABC-1234</td>
                  <td className="py-4 text-center text-sm text-neutral-700">BT-12345</td>
                  <td className="py-4 text-center text-sm text-neutral-700">Retirada</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div >

      {/* <Link href="/">
        <button className="mt-8 w-full rounded-md bg-green-400 p-4 text-neutral-600">Prosseguir</button>
      </Link>

      <Link href="/">
        <button className="mt-2 w-full rounded-md bg-yellow-400 p-4 text-neutral-600">Pendente</button>
      </Link> */}
    </div >
  )
}