import { RequestLoginForm } from '@/types/auth'
import { postData } from '../service'

const POST = {
  login({ id, password }: RequestLoginForm): Promise<any> {
    return postData(`/login`, { id, password })
  },
}

const authService = {
  POST,
}

export default authService
