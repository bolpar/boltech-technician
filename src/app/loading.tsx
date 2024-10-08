import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-green-400">
      <Image src="/boltech-logo.webp"
        width={200}
        height={200}
        alt="Logo da Boltech"
        className="animate-pulse"
      />
    </div>
  )
}