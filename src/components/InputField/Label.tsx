import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export interface ILabel {
  section: string
  children: ReactNode
}

const Label = ({ section, children }: ILabel) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flexAlign gap-2">
      <h5 className="font-bold text-secondary-700">{children}</h5>
      {errors[section] && errors[section].message && (
        <p className="text-red-500">{errors[section].message.toString()}</p>
      )}
    </div>
  )
}

export default Label
