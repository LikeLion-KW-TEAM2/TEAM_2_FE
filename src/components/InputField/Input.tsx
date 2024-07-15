import { useFormContext } from 'react-hook-form'

export interface InputType {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  section: string
}

const Input = ({ type, placeholder, section }: InputType) => {
  const { register } = useFormContext()

  return (
    <input
      type={type}
      size={15}
      {...register(section)}
      placeholder={placeholder}
      className="flex-1 rounded-2xl bg-secondary-100 px-5 py-4 outline-none placeholder:text-secondary-400"
    />
  )
}

export default Input
