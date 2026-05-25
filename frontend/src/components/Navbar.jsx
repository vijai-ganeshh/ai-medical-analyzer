import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const name = localStorage.getItem('name')

  const handleLogout = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('name')

    window.location.href = '/login'
  }

  return (

    <nav className="bg-gradient-to-r from-blue-700 to-cyan-600 shadow-lg px-8 py-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-white tracking-wide">
        AI Medical Analyzer
      </h1>

      <div className="relative">

        <button
          onClick={() => setOpen(!open)}
          className="text-white text-4xl hover:scale-110 transition"
        >
          <FaUserCircle />
        </button>

        {
          open && (

            <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl p-4 z-50">

              <p className="text-gray-700 font-semibold text-lg mb-3">
                👋 {name}
              </p>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
              >
                Logout
              </button>

            </div>
          )
        }

      </div>

    </nav>
  )
}