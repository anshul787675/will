import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/AuthContext'

export default function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate('/dashboard')
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as User</button>
    </div>
  )
}
