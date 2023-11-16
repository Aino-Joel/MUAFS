import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './CreateAccount.css'; 

function CreateAccount() {
  const [userType, setUserType] = useState('Dean');

  return (
    <div className="create-account-container">
      <div className="create-account-card">
        <div className="login-card2">
          <div className="create-account-page">
            <h1>Create an Account</h1>
            <div className="slide-button">
              <button
                className={`slide-button-option ${userType === 'Dean' ? 'selected' : ''}`}
                onClick={() => setUserType('Dean')}
              >
                Dean
              </button>
              <Link to="/CreateAccount2">
                <button
                  className={`slide-button-option ${userType === 'Custodian' ? 'selected' : ''}`}
                  onClick={() => setUserType('Custodian')}
                >
                  Custodian
                </button>
              </Link>
              <div className={`slider ${userType === 'Custodian' ? 'right' : ''}`}></div>
            </div>

            <div className="input-fields">
          
              <input type="" placeholder="Enter full name" />
              
              <input type="email" placeholder="Enter your email" />
            
              <input type="password" placeholder="Enter your password" />
            </div>

            <button className="create-account-button">Create Account</button>

            <div className="already-have-account">
              Already have an account? <Link to="/login">Log In</Link>
            </div>

            <div className="divider">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <div className="api-options">
              <button className="google-api-button">Sign Up with Google</button>
              <button className="facebook-api-button">Sign Up with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
