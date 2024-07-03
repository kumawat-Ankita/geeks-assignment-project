import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/company-info">Company Info</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
