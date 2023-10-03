import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>Home</div>
            <div>Products</div>
            <div>
                Cart<FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </header>
    )
}

export default Header;
