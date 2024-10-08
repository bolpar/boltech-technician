import Image from "next/image";
import Link from "next/link";

export default function Autenticacao() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-green-500 to-blue-300 px-4">
      <div className="flex w-full justify-center border-green-500 pb-4">
        <Image
          src="/boltech-logo.webp"
          alt="Logo da Boltech"
          width={200}
          height={100}
          className="drop-shadow-sm"
        />
      </div>

      <h3 className="mb-8 text-center text-sm text-neutral-600">
        Na <b>Boltech</b>, cada instalação sua garante mais um veículo seguro e conectado. Vamos juntos!
      </h3>

      <div className="flex w-full flex-col gap-2">
        <input className="w-full rounded-lg border border-green-600 bg-neutral-100 py-3 pl-2 placeholder:text-opacity-10" placeholder="CPF"></input>
        <input className="w-full rounded-lg border border-green-600 bg-neutral-100 py-3 pl-2 placeholder:text-opacity-10" placeholder="Senha"></input>
      </div>

      <button className="w-full rounded-lg border-b-4 border-green-600 bg-green-500 p-4 text-neutral-100 hover:bg-green-600">
        Entrar
      </button>

      <div className="mt-2">
        <Link href="/" className="text-neutral-600 hover:text-neutral-700">
          Esqueci minha senha
        </Link>
      </div>
    </div>
  )
}

