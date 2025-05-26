import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            {isOpen && (
                <div className="menu-content">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/Payment">Payment</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
