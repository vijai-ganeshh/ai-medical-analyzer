import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'

export default function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
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

  const handleSignup = async (e) => {

    e.preventDefault()

    try {

      const response = await axios.post(
        'http://127.0.0.1:5000/signup',
        formData
      )

      setMessage(response.data.message)

      setTimeout(() => {

        navigate('/login')

      }, 1500)

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        'Signup failed'
      )
    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100">

      <Navbar />

      <div className="flex justify-center items-center mt-20">

        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-[450px] border border-blue-100">

          <h2 className="text-4xl font-bold text-center text-cyan-700 mb-8">

            Create Account

          </h2>

          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded-2xl border border-blue-200 bg-blue-50 text-lg outline-none focus:ring-4 focus:ring-cyan-200"
            />

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
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition transform duration-300 text-white py-4 rounded-2xl text-xl font-semibold shadow-lg"
            >

              Signup

            </button>

          </form>

          {
            message && (

              <p className="text-center mt-5 text-blue-600 font-semibold">

                {message}

              </p>
            )
          }

          <p className="text-center mt-6 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-cyan-600 font-bold ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  )
}