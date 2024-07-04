import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/company-info">Company Info</Link></li>
                <li><Link to="/comingsoon">
                    <form className="search-form">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </form>
                </Link>
                </li>
                <li><Link to="/comingsoon">Categories</Link></li>
                <li><Link to="/comingsoon">Celebrity</Link></li>
                <li><Link to="/comingsoon">Posts</Link></li>
                <li><Link to="/comingsoon">Feeds</Link></li>
                <li><Link to="/comingsoon">News</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
