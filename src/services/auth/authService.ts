import { RequestLoginForm, RequestSignupForm } from '@/types/auth'
import { postData } from '../service'

const POST = {
  login(loginData: RequestLoginForm): Promise<any> {
    return postData(`/login`, loginData)
  },
  signup(signupData: RequestSignupForm): Promise<any> {
    return postData(`/signup`, signupData)
  },
  idValidate(userId: string): Promise<any> {
    return postData(`/signup/idvalidate`, { userId: userId })
  },
}

const authService = {
  POST,
}

export default authService
