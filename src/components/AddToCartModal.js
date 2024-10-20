// src/components/AddToCartModal.js
import React from 'react';

const AddToCartModal = ({ isOpen, product, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <h2>Product Added to Cart</h2>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default AddToCartModal;
