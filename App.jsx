import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>   
    </>
  )
}

export default App
