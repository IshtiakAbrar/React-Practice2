import React from 'react';
import {NavLink} from "react-router-dom";
import '../assets/css/Navbar.css'

const Navbar = () => {
    return (

            <ul className={'container'}>
                <NavLink to={"/"} className={'link'}><li>Home</li></NavLink>

                <NavLink to={"/service"} className={'link'}><li>Service</li></NavLink>

                <NavLink to={"/about"} className={'link'}><li>About</li></NavLink>

                <NavLink to={"/project"} className={'link'}><li>Project</li></NavLink>

                <NavLink to={"/blog"} className={'link'}><li>Blog</li></NavLink>

                <NavLink to={"/contact"} className={'link'}><li>Contact</li></NavLink>

            </ul>

    );
};

export default Navbar;