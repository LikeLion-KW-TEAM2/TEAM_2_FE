import { RequestLoginForm, RequestSignupForm } from '@/types/auth'
import { postData } from '../service'

const POST = {
  login(loginData: RequestLoginForm): Promise<any> {
    return postData(`/login`, loginData)
  },
  signup(signupData: RequestSignupForm): Promise<any> {
    return postData(`/signup`, signupData)
  },
}

const authService = {
  POST,
}

export default authService
