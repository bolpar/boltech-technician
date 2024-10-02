interface InputTextProps {
  type: string
  placeholder: string
}

export const InputText = ({ type, placeholder }: InputTextProps) => {
  return (
    <input type={type} placeholder={placeholder} className="w-full rounded-md border border-green-700 py-3 pl-4 shadow-md" />
  )
}