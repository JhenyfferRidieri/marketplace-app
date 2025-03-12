import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import ProductModal from "../components/ProductModal";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/api";
import "../styles/home.css";

const Home = () => {
  const { cart, setCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para a busca
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    }
    fetchData();
  }, []);

  const handleApplyFilters = ({ category, size, color }) => {
    let filtered = products;
  
    if (category) {
      filtered = filtered.filter((product) => product.type === category);
    }
    if (size) {
      filtered = filtered.filter((product) => product.available_sizes.includes(size));
    }
    if (color) {
      filtered = filtered.filter((product) => product.colors.includes(color));
    }
  
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };
  
  const handleClearFilters = () => {
    setFilteredProducts(products);
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sorted = [...filteredProducts];

    if (option === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  };

  const handleAddToCart = (product, selectedSize) => {
    if (!selectedSize) {
      alert("Selecione um tamanho antes de adicionar ao carrinho.");
      return;
    }

    setCart((prevCart) => [
      ...prevCart,
      { ...product, size: selectedSize, quantity: 1 },
    ]);

    setSelectedProduct(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredProducts(products);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const searchedProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.seller.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredProducts(searchedProducts);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} onCartClick={() => navigate("/cart")} onSearch={handleSearch} />

      <div className="container mx-auto flex gap-4 mt-4">
        <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <Filters onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} />
        </aside>

        <main className="flex-1">
        <div className="flex justify-between items-center mb-5">
        <h1 className="home-title font-bold">
          Roupas para adulto masculino ({filteredProducts.length})
        </h1>
          <div className="ml-auto mr-5 sort-dropdown-container">
            <select
              className="sort-dropdown"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="">Ordenar por</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
            </select>
          </div>
        </div>

          <ProductGrid products={currentProducts} onProductClick={setSelectedProduct} />
          <div className="pagination-container flex justify-start mb-4"> 
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
              <button
                key={index}
                className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} open={true} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};
export default Home;
