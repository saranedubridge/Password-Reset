import React from 'react'
import Register from './Register'
import Login from './Login'
import ForgetPassword from './ForgetPassword'
import ResetPassword from './ResetPassword'
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Dashboard from './Dashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/forget-password" element={<ForgetPassword/>}></Route>
      <Route path="/reset-password" element={<ResetPassword/>}></Route>
    

    </Routes>
    </BrowserRouter>
  )
}

export default App