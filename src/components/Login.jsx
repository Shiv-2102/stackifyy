import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthenticationContext';
import '../login.css';

function Login() {
  const { login, users } = useAuth(); // Use login and users from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);

    // Get the index of the user after login
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex !== -1) {
      console.log('User index:', userIndex); // Use this index as needed
      navigate('/onboarding'); // Redirect to onboarding page after successful login
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
