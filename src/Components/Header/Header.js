import React from 'react';
import "./Header.css";
import logo from "../../img/logo2.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header">
            {/* logo goes here  */}
            <div className="logo-section">
            <img className="logo-img" src={logo} alt="logo goes here"></img>
            </div>
            {/* nav section goes here  */}
            <nav className="nav-section">
                <ul>
                    <li>
                    <FontAwesomeIcon className="cart-icon" icon={faHome} />
                    </li>
                    <li>
                        <NavLink className={()=>"link"} to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={()=>"signup"} to="/register">SignUp</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;