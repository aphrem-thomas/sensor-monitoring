import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return(
        <div className="navbar">
            <nav>
                <Link className="link">Data scientist</Link>
                <Link className="link">Layman</Link>
                <Link className="link">Officials</Link>
                <Link className="link">Map</Link>
            </nav>
        </div>
    );
}

export default Navbar;