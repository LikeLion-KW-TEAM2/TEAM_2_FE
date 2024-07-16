import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'
import Friend from '@/pages/friend/Friend'
import Record from '@/pages/record/Record'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/record" element={<Record />} />
      <Route path="/friend" element={<Friend />} />
    </Routes>
  )
}

export default Router
