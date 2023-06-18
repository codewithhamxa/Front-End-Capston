import React from "react";
import logo from "../Assets/logo.png"
import './Header.css'

function Header(){
    return(
        <>
            <header className="header">
                <nav className="header_nav">
                    <div className="header_logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About</a> </li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;