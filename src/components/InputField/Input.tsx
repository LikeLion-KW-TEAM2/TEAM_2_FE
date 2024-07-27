import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface InputType {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  register?: ReturnType<UseFormRegister<FieldValues>>
}

const Input = ({ type, placeholder, register }: InputType) => {
  return (
    <input
      type={type}
      size={15}
      {...register}
      placeholder={placeholder}
      className="flex-1 rounded-2xl bg-secondary-100 px-5 py-4 outline-none placeholder:text-secondary-400"
    />
  )
}

export default Input
