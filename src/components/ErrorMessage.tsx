import { ChildrenType } from '@/types/common'

const ErrorMessage = ({ children }: ChildrenType) => {
  return <p className="text-center text-secondary-500">{children}</p>
}

export default ErrorMessage
