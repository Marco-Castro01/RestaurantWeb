import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Logo</div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="/about">About</a>
                </li>
                <li className="navbar-item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <button className="navbar-login-btn">Login</button>
        </nav>
    );
};

export default Navbar;
