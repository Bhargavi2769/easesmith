// src/pages/ThankYou.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const query = new URLSearchParams(useLocation().search);
    const productName = query.get('productName');

    return (
        <div>
            <h2>Thank You for Your Interest!</h2>
            <p>Thank you for your interest in {productName}!</p>
        </div>
    );
};

export default ThankYou;
