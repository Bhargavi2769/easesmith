// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onView, onAddToCart }) => (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button onClick={() => onView(product)}>View Product</button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
);

export default ProductCard;
