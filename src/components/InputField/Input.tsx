import { ChangeEvent } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface InputType {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  register?: ReturnType<UseFormRegister<FieldValues>>
  name?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  placeholder,
  register,
  name,
  value,
  onChange,
}: InputType) => {
  return (
    <input
      type={type}
      size={15}
      {...register}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="flex-1 rounded-2xl bg-secondary-100 px-5 py-4 outline-none placeholder:text-secondary-400"
    />
  )
}

export default Input
