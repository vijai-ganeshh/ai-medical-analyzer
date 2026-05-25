import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const response = await axios.post(
        'http://127.0.0.1:5000/login',
        formData
      )

      localStorage.setItem(
        'token',
        response.data.token
      )

      localStorage.setItem(
        'name',
        response.data.user.name
      )

      setMessage(response.data.message)

      navigate('/')

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        'Login failed'
      )
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100">

      <Navbar />

      <div className="flex justify-center items-center mt-20">

        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-[450px] border border-blue-100">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">

            Login

          </h2>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-5"
          >

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-2xl border border-blue-200 bg-blue-50 text-lg outline-none focus:ring-4 focus:ring-cyan-200"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="p-4 rounded-2xl border border-blue-200 bg-blue-50 text-lg outline-none focus:ring-4 focus:ring-cyan-200"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition transform duration-300 text-white py-4 rounded-2xl text-xl font-semibold shadow-lg"
            >

              Login

            </button>

          </form>

          {
            message && (

              <p className="text-center mt-5 text-red-500 font-semibold">

                {message}

              </p>
            )
          }

          <p className="text-center mt-6 text-gray-600">

            Don’t have an account?

            <Link
              to="/signup"
              className="text-blue-600 font-bold ml-2"
            >
              Signup
            </Link>

          </p>

        </div>

      </div>

    </div>
  )
}