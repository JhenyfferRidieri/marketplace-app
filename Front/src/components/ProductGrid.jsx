import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onClick={() => onProductClick(product)} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;
