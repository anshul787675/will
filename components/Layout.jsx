import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/users/101">User</NavLink>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
