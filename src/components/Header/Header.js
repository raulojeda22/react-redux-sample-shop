import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Component without using the the word class
 */
function Header() {
    return (
        <header className="header">
            <h1><Link to="/react-redux-sample-shop">Patotienda</Link></h1>
            <ul id="nav">
                <li><h2><Link to="/react-redux-sample-shop">Home</Link></h2></li>
                <li><h2><Link to="/react-redux-sample-shop/cart">Cart</Link></h2></li>
            </ul>
        </header>
    )
}

export default Header;