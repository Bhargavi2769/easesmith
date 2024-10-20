// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div>
            <p>Free Shipping on orders above 999/-</p>
            <p>Call us on: +91 98768 05120</p>
        </div>
        <div>

            <Link to="/profile">Profile</Link>
            <Link to="/cart">Cart</Link>
        </div>
        <div>
            <input type="text" placeholder="Search products..." />
        </div> 
        
    </header>
);

export default Header;
