import { useToken } from '@/store/token'
import { Navigate, Outlet } from 'react-router-dom'

export const LoginPrivateRoute = () => {
  const isAuthenticated = useToken()
  return isAuthenticated ? <Navigate to="/record" /> : <Outlet />
}

export const PrivateRoute = () => {
  const isAuthenticated = useToken()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
