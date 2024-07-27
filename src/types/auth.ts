import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface DuplicationIdRequest {
  userId: string
}

export interface LoginFormRequest {
  userId: string
  password: string
}

export interface ISignupForm {
  name: string
  userId: string
  password: string
  confirm: string
  agree: number
}

export type SignupFormRequest = Omit<ISignupForm, 'confirm'>
export type PasswordForm = Pick<ISignupForm, 'password' | 'confirm'>

export interface ICheckInput {
  isChecked: boolean
  handleClick: () => void
  children: ReactNode
}

export interface IInputTab {
  setCurrentTab: Dispatch<SetStateAction<number>>
}
