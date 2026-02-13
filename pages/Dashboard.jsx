import { useContext } from 'react'
import { AuthContext } from '../components/AuthContext'

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext)
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
