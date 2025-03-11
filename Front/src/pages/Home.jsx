import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';
import { getProducts } from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto flex gap-4 mt-4">
        <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <Filters />
        </aside>

        <main className="flex-1">
          <ProductGrid
            products={products}
            onProductClick={setSelectedProduct}
          />
        </main>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={true}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Home;