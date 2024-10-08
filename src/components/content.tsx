import Image from "next/image"
import { ReactNode } from "react"

export const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full flex-col bg-green-100 px-4 pb-48 pt-8">
      <Image
        src="/boltech-logo.png"
        alt="Boltech logo"
        width={150}
        height={80}
        className="m-auto mb-10"
      />
      {children}
    </div>
  )
}