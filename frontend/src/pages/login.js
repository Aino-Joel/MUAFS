import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";
import "./index.css";


function Login() {
  return (
    <div >
      <div className="Login-card">
      <div className="Login-container">
      <div className="login-card2">
      <div className ="card-image">
    
    </div>
    <div className="login-page">
    
    <h1 align="center">Sign In</h1>
        <p2>Please enter your details here</p2>
      <div className="input-fields">
        <input type="email" placeholder="Enter you email" />
        <input type="password" placeholder="Enetr your password" />
      </div>

      <div className="checkboxes">
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        <a class="forgot" href="./forgot-password">Forgot Password</a>
      </div>

      <button className="login-button">Login</button>
      <div className="already-have-account">
        Do not have an account? <a href="/CreateAccount2">Sign Up</a>
      </div>
      <div className="divider">
        <hr />
        <span>OR</span>
        <hr />
      </div>
      <div className="api-options">
        <button className="google-api-button"> Signup with Google</button>
        <button className="facebook-api-button">Signup with Facebook</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Login;

// import React, { useEffect, useState } from "react";
// //import { useHistory } from "react-router-dom";

// function Login(){
//     const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   //const history = useHistory()

//   const handleLogin = () => {
// //     // You can add your login validation logic here
// //     // For simplicity, let's just check if both fields are filled
//     if (username && password) {
//       alert('Login successful!');
//       //history.push('/')
//     } else {
//       alert('Please enter both username and password.');
//     }
// //     // window.location.href = '/home';
//   };

//     return (
//         <div className="login-container">
//         <h2>Login</h2>
//         <form>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="button" onClick={handleLogin}>
//             Login
//           </button>
//         </form>
//       </div>
//     )
// }
// export default Login