import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'
import Friend from '@/pages/friend/Friend'
import FriendSearch from '@/pages/friend/FriendSearch'
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
    </Routes>
  )
}

export default Router
