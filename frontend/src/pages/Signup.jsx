import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'

export default function Signup() {

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

    } catch (error) {

      console.log(error)

      setMessage(
        error.response?.data?.message ||
        'Signup failed'
      )
    }
  }

  return (

    <>
  <Navbar />

  <div className="container">

      <div className="card">

        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

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
            Signup
          </button>

        </form>

        {
          message && (
            <p>{message}</p>
          )
        }

      </div>

    </div>

</>
  )
}