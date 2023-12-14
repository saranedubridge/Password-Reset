import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
 
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
    }
  };
  return (
    <div>
      <h2>Set New Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PasswordReset;
