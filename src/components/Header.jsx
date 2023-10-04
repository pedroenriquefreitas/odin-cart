import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="products">Products</Link>
            <div>
                <Link to="cart">Cart</Link><FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </header>
    )
}

export default Header;
