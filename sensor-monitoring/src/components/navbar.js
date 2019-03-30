import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <input type="checkbox" id="navbar_checkbox" />
            <label for="navbar_checkbox" id="navbar_checkbox_label"></label>
            <nav id="nav_drawer">
                <Link className="link" to='/'>Layman</Link>
                <Link className="link" to='/datascientist'>Datascientist</Link>
                <Link className="link" to='/policymakers'>Officials</Link>
                <Link className="link" to='/layman'>Map</Link>
            </nav>
        </div>
    );
}

export default Navbar;