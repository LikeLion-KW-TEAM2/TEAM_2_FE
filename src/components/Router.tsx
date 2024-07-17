import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'
import Friend from '@/pages/friend/Friend'
import FriendSearch from '@/pages/friend/FriendSearch'
import Guestbook from '@/pages/guestbook/Guestbook'
import Icecream from '@/pages/icecream/Icecream'
import AccountInfo from '@/pages/mypage/AccountInfo'
import Mypage from '@/pages/mypage/Mypage'
import Record from '@/pages/record/Record'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/record" element={<Record />} />
      <Route path="/friend" element={<Friend />} />
      <Route path="/friend/search" element={<FriendSearch />} />
      <Route path="/guestbook" element={<Guestbook />} />
      <Route path="/icecream" element={<Icecream />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/account-info" element={<AccountInfo />} />
    </Routes>
  )
}

export default Router
