import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'
import Friend from '@/pages/friend/Friend'
import FriendSearch from '@/pages/friend/FriendSearch'
import Guestbook from '@/pages/guestbook/Guestbook'
import Icecream from '@/pages/icecream/Icecream'
import AccountInfo from '@/pages/mypage/AccountInfo'
import CompleteHabit from '@/pages/mypage/CompleteHabit'
import FriendList from '@/pages/mypage/FriendList'
import Mypage from '@/pages/mypage/Mypage'
import PasswordEdit from '@/pages/mypage/PasswordEdit'
import Record from '@/pages/record/Record'
import { Route, Routes } from 'react-router-dom'
import Onboarding from './Onboarding'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/record" element={<Record />} />
      <Route path="/friend" element={<Friend />} />
      <Route path="/friend/search" element={<FriendSearch />} />
      <Route path="/guestbook" element={<Guestbook />} />
      <Route path="/icecream" element={<Icecream />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/account-info" element={<AccountInfo />} />
      <Route path="/mypage/password" element={<PasswordEdit />} />
      <Route path="/mypage/friend-list" element={<FriendList />} />
      <Route path="/mypage/complete-habit" element={<CompleteHabit />} />
    </Routes>
  )
}

export default Router
