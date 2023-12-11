import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div>
      <div className="Login-card">
        <div className="Login-container">
          <div className="login-card2">
            <div className="card-image"></div>
            <div className="login-page">
              <form onSubmit={handleSubmit}>
                <h1 align="center">Sign In</h1>
                <h4>Please enter your details here</h4>
                <div className="input-fields">
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Enetr your Email"
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="checkboxes">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                  <a className="forgot" href="./forgot-password">
                    Forgot Password
                  </a>
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
                  <button className="google-api-button">
                    {" "}
                    Signup with Google
                  </button>
                  <button className="facebook-api-button">
                    Signup with Facebook
                  </button>
                </div>
                {error && <div className="error">{error}</div> }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
