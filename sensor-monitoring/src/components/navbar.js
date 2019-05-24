import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <input type="checkbox" id="navbar_checkbox" />
            <label for="navbar_checkbox" id="navbar_checkbox_label"></label>
            <nav id="nav_drawer">
                <a className="home-link" href="/">Home</a>
                <Link className="link" to='/dashboard'>Layman</Link>
                <Link className="link" to='/dashboard/datascientist'>Datascientist</Link>
                <Link className="link" to='/dashboard/policymakers'>Officials</Link>
                {/* <Link className="link" to='/dashboard/layman'>Map</Link> */}
            </nav>
        </div>
    );
}

export default Navbar;