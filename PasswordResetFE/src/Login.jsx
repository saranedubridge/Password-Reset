import{useState}from 'react'
import axios from 'axios'
import{Link, useNavigate}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [error, setError] = useState(null);
    const navigate=useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/api/login', {
            email,
            password,
          });
    
          if (response.status === 200) {
            const { token, email, name } = response.data;
    
            // Store the token and user data in localStorage for authentication
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            localStorage.setItem('name', name);
    
            setError(null);
    
            // Clear the form inputs after successful login
            setEmail('');
            setPassword('');
    
            console.log('Login successful');
            alert('Login successful');
            navigate('/dashboard')
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            const errorMessage = error.response.data.message; // "No user found"
    setError(errorMessage);
          } else {
            setError('An error occurred during login. Please try again.');
          }
        }
      };


  return (
    <div>
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
    
        <strong>Email</strong><br/>
            <input
              type="text"
              placeholder='Enter Email'
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              required
            /><br/>

        <strong>Password</strong><br/>
            <input
              type="text"
              placeholder='Enter Password'
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              required
            /><br/><br/>
            <button type="submit">Login</button>

        </form>
        <p>Don`t Have an Account</p>
        <Link to="/forget-password">Forget Password</Link> <br/>
        <Link to='/'>Register</Link>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}

export default Login