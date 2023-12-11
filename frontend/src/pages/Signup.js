import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const status = 'student'
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()

        await signup(fName, lName, email, password)
    }

    return ( 
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>First Name:</label>
            <input 
                type="text"
                onChange={(e) => setFName(e.target.value)}
                value={fName}
            />
             <label>Last Name:</label>
            <input 
                type="text"
                onChange={(e) => setLName(e.target.value)}
                value={lName}
            />
             {/* <label>Registration Number:</label>
            <input 
                type="text"
                onChange={(e) => setRegNo(e.target.value)}
                value={regNo}
            /> */}
            <label>Email:</label>
            <input 
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div> }
        </form>
     );
}
 
export default Signup;