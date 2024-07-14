import { ReactNode } from 'react'

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined
  size: string
  width?: string
  children: ReactNode
  disabled?: boolean
  handleClick?: () => void
}

const Button = ({
  type = 'button',
  size,
  width = 'w-fit',
  children,
  disabled = false,
  handleClick,
}: IButton) => {
  let style = ''
  if (size === 'large') style = 'px-8 text-large'
  else if (size === 'medium') style = 'px-8 text-medium'
  else if (size === 'small') style = 'px-5 text-small'
  else if (size === 'xsmall') style = 'px-4 text-xsmall'

  return (
    <button
      type={type}
      className={`text-secondary-50 shadow-large bg-primary-600 flex-shrink-0 rounded-full py-3 font-bold transition-all hover:scale-[1.02] ${width} ${style} ${disabled && 'bg-secondary-50'}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
