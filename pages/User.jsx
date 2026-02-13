import { useParams } from 'react-router-dom'

export default function User() {
  const { id } = useParams()
  return (
    <div className="card">
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  )
}
