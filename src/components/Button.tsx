import { ReactNode } from 'react'

interface IButton {
  size: string
  width: string
  children: ReactNode
  disabled?: boolean
}

const Button = ({ size, width, children, disabled = false }: IButton) => {
  let style = ''
  if (size === 'large') style = 'px-8 font-large'
  else if (size === 'medium') style = 'px-8 font-medium'
  else if (size === 'small') style = 'px-8 font-small'
  else if (size === 'xsmall') style = 'px-8 font-xsmall'

  return (
    <button
      className={`text-secondary-50 shadow-large bg-primary-600 rounded-full py-3 font-bold transition-all hover:scale-[1.02] ${width} ${style} ${disabled && 'bg-secondary-50'}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
