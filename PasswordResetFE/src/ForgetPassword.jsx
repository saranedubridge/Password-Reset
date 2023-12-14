import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import{useNavigate}from 'react-router-dom'


function PasswordResetRequest() {

    const[email,setEmail]=useState("");
    const [message,setMessage]=useState("")
    const navigate=useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3001/api/passwordRequest', { email });
    
            if (response.status === 200) {
                alert('Password reset link sent successfully');
                navigate('/login')
            } else {
                // Handle other non-200 responses if needed
                setMessage('An error occurred while sending the password reset link.');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('Invalid user');
            } else {
               
                setMessage('An error occurred while sending the password reset link.');
            }
        }
    }
    

  return (
<div>
    <h2>Reset Password</h2>

    <form onSubmit={handleSubmit}>
    <strong>Email</strong><br/>
            <input
              type="text"
              placeholder='Enter Email'
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              required
            /><br/>
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
</div>
  )
}

export default PasswordResetRequest;