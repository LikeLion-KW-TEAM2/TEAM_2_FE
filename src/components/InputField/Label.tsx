import { ReactNode } from 'react'

export interface ILabel {
  error?: any
  children: ReactNode
}

const Label = ({ error, children }: ILabel) => {
  return (
    <div className="flexAlign gap-2">
      <h5 className="font-bold text-secondary-700">{children}</h5>
      {error && error.message && (
        <p className="text-xsmall text-error-primary">
          {error.message.toString()}
        </p>
      )}
    </div>
  )
}

export default Label
