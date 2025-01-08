import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import '../dashboard.css';

function Dashboard() {
  const { user } = useAuth(); // Get the logged-in user from context
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard, {user.username}!</h1>
      <p>This is your dashboard where you can view and manage your account.</p>
      <div className="placeholder">
        <h2>Placeholder Info</h2>
        <p>Here, you'll find your account details and activity.</p>
      </div>
    </div>
  );
}

export default Dashboard;
