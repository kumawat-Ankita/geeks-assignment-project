import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
const Login = () => {
    const [credentials, setCredentials] = useState({ name: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.name === credentials.name && user.password === credentials.password) {
            navigate('/home');
        } else {
            setError('Invalid Credentials');
        }
    };

    return (
        <div className="containerMain">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                </label>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
