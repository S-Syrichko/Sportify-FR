import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {
    const userId = 18;
    return (
        <nav>
            <NavLink to={`/profile/${userId}`}>Accueil</NavLink>
            <NavLink to={`/profile/${userId}`}>Profil</NavLink>
            <NavLink to={`/profile/${userId}`}>Rélages</NavLink>
            <NavLink to={`/profile/${userId}`}>Communauté</NavLink>
        </nav>
    );
};

export default Nav;