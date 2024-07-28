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
import RecordEdit from '@/pages/record/RecordEdit'
import RecordAdd from '@/pages/record/RecordAdd'
import Onboarding from '../Onboarding/Onboarding'
import { LoginPrivateRoute, PrivateRoute } from './PrivateRouter'
import ErrorPage from '../ErrorPage'

const RouterComponent = () => {
  return (
    <Routes>
      <Route element={<LoginPrivateRoute />}>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/record" element={<Record />} />
        <Route path="/record/edit/:id" element={<RecordEdit />} />
        <Route path="/record/add" element={<RecordAdd />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/friend/search" element={<FriendSearch />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/icecream" element={<Icecream />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/account-info" element={<AccountInfo />} />
        <Route path="/mypage/password" element={<PasswordEdit />} />
        <Route path="/mypage/friend-list" element={<FriendList />} />
        <Route path="/mypage/complete-habit" element={<CompleteHabit />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default RouterComponent
