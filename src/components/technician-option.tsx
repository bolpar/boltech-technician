import Link from "next/link"
import { ElementType } from "react"

interface TechnicianOptionProps {
  title: string
  url: string
  icon: ElementType
}

export const TechnicianOption = ({ title, url, icon: Icon }: TechnicianOptionProps) => {
  return (
    <Link href={url} className="group w-full">
      <div className="flex w-full flex-col items-center gap-4 rounded-md border-b-2 border-blue-700 bg-blue-500 px-4 py-4 group-hover:bg-blue-600">
        <Icon className="text-blue-900" />
        <span className="text-white">{title}</span>
      </div>
    </Link>
  )
}