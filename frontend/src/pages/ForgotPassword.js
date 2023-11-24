import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSendCode = () => {
        navigate('/verify-code');
    };
    return (
        <div>
            <h2>Forgot password</h2>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleSendCode}>send Code</button>
            <Link to="./Login.js">banck to Login</Link>
        </div>
    );
};

export default ForgotPassword;
