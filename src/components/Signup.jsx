import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createUser(email, password);
            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(error);
        }

    };

    return (
        <div>
            <h1>Sign up for a free account</h1>
            <p>
                Already have an account? <Link to='/'>Sign in</Link>.
            </p>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Email Address</label>
                    <input type="email" onChange={(e) =>  setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) =>  setPassword(e.target.value)}/>
                </div>

                <button>Sign Up</button>
            </form>
        </div>
    );
    };

export default Signup;