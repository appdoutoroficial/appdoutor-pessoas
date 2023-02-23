import React, { useState, useEffect } from "react";
import logo from '../assets/images/logo-branco.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg">
            <FontAwesomeIcon icon={faChevronLeft} onClick={() => navigate(-1)} />

            <div className="logo1">
                <a href="/login">
                    <img src={logo} className="logo" alt="" />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;