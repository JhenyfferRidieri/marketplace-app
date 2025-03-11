import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    const res = await fetch("http://127.0.0.1:3333/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto flex gap-4 mt-4">
        <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Filtros</h2>
          {/* Componente Filters */}
        </aside>

        <main className="grid grid-cols-3 gap-6 flex-1">
          {products.map((product) => (
            <div
              key={product.name}
              className="border rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="rounded-t-lg object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-700">{product.name}</h3>
                <p className="text-gray-500">R$ {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </main>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <button
              className="absolute top-2 right-2 font-bold"
              onClick={() => setSelectedProduct(null)}
            >
              X
            </button>
            <img src={selectedProduct.image_url} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{selectedProduct.name}</h3>
            <p>{selectedProduct.details}</p>
            <p className="font-bold text-lg mt-2">R$ {selectedProduct.price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;