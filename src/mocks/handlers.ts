import { auth } from './handler/auth'
import { friend } from './handler/friend'
import { mypage } from './handler/mypage'

export const handlers = [...auth, ...mypage, ...friend]
