import React, { useState } from "react";
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Header.css'
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
    <div className="container">
        <div className="header-con">
            <div className="logo-container">
                <a href="#home"> <FiCode /></a>
            </div>
            <ul className={click ? "menu active" : "menu"}>
                {/* <li className="menu-link" onClick={closeMobileMenu}>
                <a  href="#home" data-nav-section="home">Home</a>
                </li> */}
                <li className="menu-link" onClick={closeMobileMenu}>
                <a  href="/app" data-nav-section="app">Home</a>
                </li>
                <li className="menu-link" onClick={closeMobileMenu}>
                <a href="#port" data-nav-section="Port">Classes</a>
                </li>
                <li className="menu-link" onClick={closeMobileMenu}>
                <a href="/app" data-nav-section="login">Logout</a>
                </li>
                {/* <li className="menu-link" onClick={closeMobileMenu}>
                <a href="#port" data-nav-section="Port">Portfolio</a>
                </li> */}
                <li className="menu-link" onClick={closeMobileMenu}>
                <a href="/register" data-nav-section="Register">Register</a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <FiX />
                ) : (
                    <FiMenu />
                )}
            </div>
        </div>
    </div>
</div>
)
}
    
export default Header ;
