import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./navstyles.css"
const Navbar = () => {
    const navigate = useNavigate();

    return(
        <nav>
            <button id ="navbuttonnext" onClick={ () => navigate(+1) }>&raquo;</button>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="/albums">Albums</NavLink>
            <NavLink activeclassname="active" to="/new">New</NavLink>
            <button id ="navbuttonback" onClick={ () => navigate(-1) }>&laquo;</button>
        </nav>
    );
}

export default Navbar;