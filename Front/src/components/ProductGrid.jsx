import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
