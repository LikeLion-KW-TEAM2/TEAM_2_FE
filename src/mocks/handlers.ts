import { auth } from './handler/auth'
import { friend } from './handler/friend'
import { guestbook } from './handler/guestbook'
// import { icecream } from './handler/icecream'
import { mypage } from './handler/mypage'

export const handlers = [
  ...auth,
  ...mypage,
  ...friend,
  ...guestbook,
  // ...icecream,
]
