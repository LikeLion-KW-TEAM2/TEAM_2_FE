export interface RequestLoginForm {
  id: string
  password: string
}

export interface SignupForm {
  name: string
  userId: string
  password: string
  confirm: string
  agree: number
}

export type RequestSignupForm = Omit<SignupForm, 'confirm'>
