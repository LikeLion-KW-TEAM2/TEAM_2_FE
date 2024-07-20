import { ReactNode } from 'react'

export interface ChildrenType {
  children: ReactNode
}

export interface IModal {
  children: React.ReactNode
  closeBtn?: boolean
  isOpen: boolean
  closeModal: () => void
  handleClick?: () => void
}

export type ModalType = Pick<IModal, 'isOpen' | 'closeModal' | 'handleClick'>
export type ModalClickType = ModalType & { handleClick: () => void }
