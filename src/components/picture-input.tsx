import { ImagePlusIcon } from "lucide-react"
import { InputText } from "./UI/input-text"

interface PictureInputProps {
  title: string
  placeholder: string
}

export const PictureInput = ({ title, placeholder }: PictureInputProps) => {
  return (
    <>
      <button className="mb-2 flex w-full justify-between gap-2 rounded-lg bg-green-900/50 p-4 transition-all hover:bg-green-900">
        <span className="text-green-200">{title}</span>
        <ImagePlusIcon className="text-green-200" />
      </button>

      <InputText type="text" placeholder={placeholder} />
    </>
  )
}