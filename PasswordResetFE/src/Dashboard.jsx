import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/Style.css'; // Import the CSS file with your styles

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="register-container"> {/* Apply the same container class */}
      <div className="register-form"> {/* Apply the same form class */}
        <h2 className="text-center">Welcome!</h2>
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

