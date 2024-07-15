import ReactDom from 'react-dom'
import { ChildrenType } from '@/types/common'

const ModalPortal = ({ children }: ChildrenType) => {
  const modalRoot = document.getElementById('modal') as HTMLElement

  return ReactDom.createPortal(children, modalRoot)
}

export default ModalPortal
