


import axios from 'axios';
import { React, useState, } from 'react'

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    async function register(e) {
        e.preventDefault();

        try {
            const registerData = {
                email,
                password,
                passwordVerify,
            };
            await axios.post("http://localhost:3000/auth/", registerData, {
                withCredentials: true
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div>
                <h1>Resgiter a new account</h1>
                <form onSubmit={register}>
                            <input 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                            <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                            <input 
                            type="password" 
                            placeholder="Verify your password" 
                            onChange={(e) => setPasswordVerify(e.target.value)}
                            value={passwordVerify}
                            />
                            <button type="submit">Register</button>
                        </form>

               
            </div>
        </div>
    )
}

