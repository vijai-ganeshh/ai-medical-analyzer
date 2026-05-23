import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('')

  const [user, setUser] = useState(null)

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

      setMessage(response.data.message)

      setUser(response.data.user)

    } catch (error) {

      console.log(error)

      setMessage(
        error.response?.data?.message ||
        'Login failed'
      )
    }
  }

  return (

    <>

      <Navbar />

      <div className="container">

        <div className="card">

          <h2>Login</h2>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit">
              Login
            </button>

          </form>

          {
            message && (
              <p>{message}</p>
            )
          }

          {
            user && (
              <div>

                <h3>User Details</h3>

                <p>
                  <strong>Name:</strong> {user.name}
                </p>

                <p>
                  <strong>Email:</strong> {user.email}
                </p>

              </div>
            )
          }

        </div>

      </div>

    </>

  )
}