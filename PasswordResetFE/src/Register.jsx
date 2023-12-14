import{useState}from 'react'
import axios from 'axios'
import{Link,useNavigate}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Style/Style.css"


function Register() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()


    const handleSubmit=async(event)=>{
        event.preventDefault()

        console.log('Registering user...');
        try{

            const response = await axios.post('http://localhost:3001/api/users', {name,email,password});

            
        if (response.status === 200) {
            console.log('Registration successfull')
            alert('Registration successfull')
            navigate('/login')

            // Clear the form inputs after successful registration
        setName('');
        setEmail('');
        setPassword('');


        }          
        }catch(error){
       console.error('Registration Failed:',error);

    }

    };



    return (
        <div className="register-container">
          <div className="register-form">
            <h2 className="text-center">Register</h2>
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
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                  Register
                </button>
              </div>
            </form>
            <p className="text-center mt-3">
              Already Have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      );
    }
       


export default Register