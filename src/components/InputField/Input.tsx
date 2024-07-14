export interface InputType {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
}

const Input = ({ type, placeholder }: InputType) => {
  return (
    <input
      type={type}
      size={15}
      placeholder={placeholder}
      className="bg-secondary-100 placeholder:text-secondary-400 flex-1 rounded-2xl px-5 py-4 outline-none"
    />
  )
}

export default Input
