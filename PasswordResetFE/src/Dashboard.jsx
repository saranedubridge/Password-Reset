import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <div>
    <h2>Welcome!</h2>
    <button onClick={handleLogout} >Logout</button>
  </div>
  )
}

export default Dashboard
