import React, {useReducer} from "react";
import { Link, useNavigate } from "react-router-dom";

const VerifyCode = () => {
    const [code, setCode] = useReducer('');
    const navigate = useNavigate();

    const handleVerifyCode = () => {
        navigate('/create-new-password');
    };
    return (
        <div>
            <h2>Verify Code</h2>
            <label>Verification Code</label>
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            <button onClick={handleVerifyCode}>Verify Code</button>
            <Link to="./Login.js">banck to Login</Link>
        </div>
    );
};

export default VerifyCode;