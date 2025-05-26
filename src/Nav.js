import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import React, { useState, useEffect } from "react";
import './App.css';

function Nav(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
	
	
	useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login"); // ✅ Navigate AFTER state updates
  };

  
  return (
    <nav className="Navbar">
      <div className="Navdiv">
        <img src={require("./image/" + props.logo)} alt="logo" />
      </div>

      <div className="Navdiv2">
        <ul className={isOpen ? "navmenu active" : "navmenu"}>
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>

      <div className="but">
        {isLoggedIn ? (
          <Button value="Logout" onClick={handleLogout} />
        ) : (
          <>
            <Link to="/register"><Button value="Register" /></Link>
            <Link to="/login"><Button value="Login" /></Link>
          </>
        )}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Nav;
