import { auth } from './handler/auth'
import { mypage } from './handler/mypage'

export const handlers = [...auth, ...mypage]
