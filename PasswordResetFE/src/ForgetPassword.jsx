import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import{useNavigate}from 'react-router-dom'
import "./Style/Style.css"

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
        <div className="register-container"> {/* Apply the same container class */}
          <div className="register-form"> {/* Apply the same form class */}
            <h2 className="text-center">Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Send Reset Link
                </button>
              </div>
            </form>
            {message && <p className="text-center mt-3">{message}</p>}
          </div>
        </div>
      );
    }

export default PasswordResetRequest;