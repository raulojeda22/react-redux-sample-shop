import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1><Link to="/">Patotienda</Link></h1>
            <ul id="nav">
                <li><h2><Link to="/">Home</Link></h2></li>
                <li><h2><Link to="/cart">Cart</Link></h2></li>
            </ul>
        </header>
    )
}

export default Header;