import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        profession: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        alert('User registered successfully!');
        navigate('/login');
    };

    return (
        <div className="containerMain">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    Profession:
                    <select name="profession" value={formData.profession} onChange={handleChange} required>
                        <option value="">Select Profession</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                    </select>
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
