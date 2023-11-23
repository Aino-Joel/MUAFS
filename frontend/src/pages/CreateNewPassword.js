import React, {useState} from "react";
import { Link,  useNavigate } from "react-router-dom";

const CreateNewPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleCreatePassword = () => {
        navigate('/Login');
    };
    return (
        <div>
            <h2>Create New Password</h2>
            <label>New Password</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <button onClick={handleCreatePassword}>Create Password</button>
            <Link to="./Login.js">banck to Login</Link>
        </div>
    );
};

export default CreateNewPassword;