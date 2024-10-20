// src/pages/ProductList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change here
import products from '../mockData';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const navigate = useNavigate(); // Change here

    const handleViewProduct = (product) => {
        navigate(`/thank-you?productName=${product.name}`); // Change here
    };

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleConfirmAddToCart = () => {
        // Handle adding product to cart
        setModalOpen(false);
    };

    return (
        <div>
            <Header />
            <div className="product-list">
                {displayedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onView={handleViewProduct}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            <AddToCartModal
                isOpen={isModalOpen}
                product={selectedProduct}
                onClose={() => setModalOpen(false)}
                onConfirm={handleConfirmAddToCart}
            />
        </div>
    );
};

export default ProductList;
