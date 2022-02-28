import React from 'react';
import "./Header.css";
import logo from "../../img/logo2.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import useAuth from "./../../Hooks/useAuth";


const Header = () => {
    const navigate = useNavigate();
    const {user, logOut} = useAuth();
    const handleLogOut=()=>{
        logOut();
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div className="header">
            {/* logo goes here  */}
            <div className="logo-section">
                <NavLink to="/home">
                <img className="logo-img" style={{cursor:"pointer"}} src={logo} alt="logo goes here"></img>
                </NavLink>
            </div>
            {/* nav section goes here  */}
            <nav className="nav-section">
                <ul>
                    <li>
                    <FontAwesomeIcon className="cart-icon" icon={faHome} />
                    </li>
                    {!user.email&&<li>
                        <NavLink className={()=>"link"} to="/login">Login</NavLink>
                    </li>}
                    {!user.email&&<li>
                        <NavLink className={()=>"signup"} to="/register">SignUp</NavLink>
                    </li>}
                    
                    {user.email && <li><span style={{marginLeft:"5px", marginRight:"5px"}}>{user.displayName}</span>
                        <button className="logout" onClick={handleLogOut}>Logout</button>
                    </li>}
                </ul>
            </nav>
        </div>
    );
};

export default Header;