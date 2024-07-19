import { ReactNode } from 'react'

export interface ILabel {
  error?: any
  success?: string
  children: ReactNode
}

const Label = ({ error, children, success }: ILabel) => {
  console.log(success)
  return (
    <div className="flexAlign gap-2">
      <h6 className="font-bold text-secondary-700">{children}</h6>
      {error && error.message && (
        <p className="text-xsmall text-error-primary">
          {error.message.toString()}
        </p>
      )}
      {success && <p className="text-xsmall text-[#15B53D]">{success}</p>}
    </div>
  )
}

export default Label
