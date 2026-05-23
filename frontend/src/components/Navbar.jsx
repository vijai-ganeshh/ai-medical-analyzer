import { Link } from 'react-router-dom'

export default function Navbar() {

  return (

    <div className="navbar">

      <div className="nav-left">
        AI Medical Analyzer
      </div>

      <div className="nav-right">

        <Link to="/">
          Home
        </Link>

        <Link to="/signup">
          Signup
        </Link>

        <Link to="/login">
          Login
        </Link>

      </div>

    </div>
  )
}