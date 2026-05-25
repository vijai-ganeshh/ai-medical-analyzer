import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {

  return (

    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 min-h-screen">

      <BrowserRouter>

        <Routes>

          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />

        </Routes>

      </BrowserRouter>

    </div>
  )
}