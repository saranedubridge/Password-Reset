import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Style/Style.css"
 
function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function PasswordReset() {
  const query = useQuery();
  const token = query.get('token');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate()



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Sending request with password:", password, "and token:", token);
      const response = await axios.post(`http://localhost:3001/api/PasswordReset/${token}`, { newpassword: password });

      alert('Password updated successfully');
      navigate('/login')
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.response.data.message);
      alert('link Expired')
      navigate('/login')
    }
  };
  return (
    <div className="register-container"> {/* Apply the same container class */}
      <div className="register-form"> {/* Apply the same form class */}
        <h2 className="text-center">Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="newpassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
        {message && <p className="text-center mt-3">{message}</p>}
      </div>
    </div>
  );
}

export default PasswordReset;
