import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', { email, password });
            console.log(response.data.message);

            
            navigate('/home');
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold mb-5">LoginPage</h1>
                <div><input type="text" onChange={handleChange} name='email' value={email} placeholder="email" /></div>
                <div><input type="password" onChange={handleChange} name='password' value={password} placeholder="password" /></div>
                <div><button type="submit">Login</button></div>
                <p>Don’t have an account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    );
}
