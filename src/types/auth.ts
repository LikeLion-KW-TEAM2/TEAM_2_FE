export interface RequestLoginForm {
  id: string
  password: string
}

export interface SignupForm {
  nickname: string
  id: string
  password: string
  confirm: string
}

export type RequestSignupForm = Omit<SignupForm, 'confirm'>
