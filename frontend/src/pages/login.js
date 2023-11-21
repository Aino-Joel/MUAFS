import React, { useEffect, useState } from "react";

function Login(){
    const [username, setUsername] = useState('kijjo');
  const [password, setPassword] = useState('COSMAS62');

  const handleLogin = () => {
//     // You can add your login validation logic here
//     // For simplicity, let's just check if both fields are filled
    if (username && password) {
      alert('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };

    return (
        <div className="login-container">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    )
}
export default Login