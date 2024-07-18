import { ReactNode } from 'react'

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined
  size: string
  width?: string
  children: ReactNode
  disabled?: boolean
  error?: boolean
  className?: string
  handleClick?: () => void
}

const Button = ({
  type = 'button',
  size,
  width = 'w-fit',
  children,
  disabled = false,
  error = false,
  className,
  handleClick,
}: IButton) => {
  let style = ''
  if (size === 'large') style = 'px-8 py-3 text-large'
  else if (size === 'medium') style = 'px-6 py-2 text-medium'
  else if (size === 'small') style = 'px-5 py-[6px] text-small'
  else if (size === 'xsmall') style = 'px-4 py-1 text-xsmall'

  const bgColor = error
    ? 'bg-error-primary'
    : disabled
      ? 'bg-secondary-50'
      : 'bg-primary-600'

  return (
    <button
      type={type}
      className={`flex-shrink-0 rounded-full font-bold text-secondary-50 shadow-large transition-all hover:scale-[1.02] ${width} ${style} ${bgColor} ${className}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
