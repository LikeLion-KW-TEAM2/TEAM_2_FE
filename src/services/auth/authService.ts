import { RequestDuplicationId, RequestSignupForm } from '@/types/auth'
import { postData } from '../service'

const POST = {
  login(loginData: FormData) {
    return postData(
      `/login`,
      loginData,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      },
      true,
    )
  },
  signup(signupData: RequestSignupForm): Promise<any> {
    return postData(`/signup`, signupData)
  },
  idValidate(userId: RequestDuplicationId): Promise<any> {
    return postData(`/signup/idvalidate`, userId)
  },
}

const authService = {
  POST,
}

export default authService
