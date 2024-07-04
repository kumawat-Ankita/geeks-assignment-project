import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
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

        if (user && user.email === credentials.email && user.password === credentials.password) {
            navigate('/home');
        } else {
            setError('Invalid Credentials. If you don\'t have an account, please sign up.');
        }
    };

    return (
        <div className="containerMain">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                </label>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
            {error && (
                <div className="signup-message">
                    <p>Don't have an account? <Link to="/">Sign up here</Link>.</p>
                </div>
            )}
        </div>
    );
};

export default Login;
