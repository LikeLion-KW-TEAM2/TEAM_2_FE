import { RequestDuplicationId, SignupFormRequest } from '@/types/auth'
import { instanceWithoutAuth } from '../service'

const POST = {
  login(loginData: FormData) {
    return instanceWithoutAuth.post(`/login`, loginData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
  },
  signup(signupData: SignupFormRequest): Promise<any> {
    return instanceWithoutAuth.post(`/signup`, signupData)
  },
  idValidate(userId: RequestDuplicationId): Promise<any> {
    return instanceWithoutAuth.post(`/signup/idvalidate`, userId)
  },
}

const authService = {
  POST,
}

export default authService
