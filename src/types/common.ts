import { ReactNode } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { AccountInfoRequest } from './mypage'

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

export interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined
  size: string
  width?: string
  children: ReactNode
  disabled?: boolean
  error?: boolean
  className?: string
  handleClick?: () => void
}

export interface ISubHeader {
  to?: string
  hidden?: boolean
  children: ReactNode
  handleClickDelete?: () => void
}

export interface IImageUpload {
  myImage: string
  setValue: UseFormSetValue<AccountInfoRequest>
}

export type ModalType = Pick<IModal, 'isOpen' | 'closeModal' | 'handleClick'>
export type ModalClickType = ModalType & { handleClick: () => void }
