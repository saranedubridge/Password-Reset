import{useState}from 'react'
import axios from 'axios'
import{Link, useNavigate}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Style/Style.css"

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
      <div className="register-container"> {/* Apply the same container class */}
        <div className="register-form"> {/* Apply the same form class */}
          <h2 className="text-center">Login</h2>
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
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Don't Have an Account? <Link to="/">Register</Link>
          </p>
          <p className="text-center mt-3">
          <Link to="/forget-password">Forget Password</Link>
          </p> <br />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
export default Login