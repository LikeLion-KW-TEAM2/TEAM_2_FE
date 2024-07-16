import { ReactNode } from 'react'

export interface ChildrenType {
  children: ReactNode
}

export interface IModal {
  children: React.ReactNode
  closeBtn?: boolean
  isOpen: boolean
  closeModal: () => void
}

export type ModalIceCreamType = Pick<IModal, 'isOpen' | 'closeModal'>
