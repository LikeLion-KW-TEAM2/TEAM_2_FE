import { RequestLoginForm, RequestSignupForm } from '@/types/auth'
import { postData } from '../service'

const POST = {
  login(loginData: RequestLoginForm): Promise<any> {
    return postData(`/login`, loginData)
  },
  signup(signupData: RequestSignupForm): Promise<any> {
    return postData(`/signup`, signupData)
  },
  idValidate(id: string): Promise<any> {
    return postData(`/signup/idvalidate`, id)
  },
}

const authService = {
  POST,
}

export default authService
