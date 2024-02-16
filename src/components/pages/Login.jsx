import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Login.css'; // Import your CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password==='admin') {
      setIsLoggedIn(true);
      localStorage.setItem('username', username);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter both username and password.',
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <p className="welcome">Welcome, {localStorage.getItem('username')}!</p>
        <button className="logoutBtn" onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <input
          className="inputField"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="inputField"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="loginBtn" onClick={handleLogin}>Login</button>
      </div>
    );
  }
};

export default LoginPage;
