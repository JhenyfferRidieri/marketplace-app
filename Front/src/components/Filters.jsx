import React, { useState } from "react";
import "../styles/Filters.css";

const Filters = ({ onApplyFilters, onClearFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const categories = ["Camiseta", "Regata", "Calção", "Acessório"];
  const colors = [
    { name: "Amarelo", hex: "#FFD700" },
    { name: "Azul", hex: "#1E90FF" },
    { name: "Bege", hex: "#F5F5DC" },
    { name: "Branco", hex: "#FFFFFF" },
    { name: "Preto", hex: "#000000" },
    { name: "Vermelho", hex: "#DC143C" },
    { name: "Verde", hex: "#008000" }
  ];
  const sizesText = ["P", "M", "G", "GG"];
  const sizesNumbers = ["42", "44", "46"];

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedSize(null);
    setSelectedColor(null);

    // Chamando a função para limpar os filtros no componente pai
    onClearFilters();

    document.querySelectorAll(".category-button, .size-button, .color-button").forEach((el) => {
      el.classList.remove("selected");
    });
  };

  return (
    <div className="filter-container">
      {/* Categorias */}
      <div className="mb-3">
        <h4 className="text-sm font-semibold mb-2">Categoria</h4>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? "selected" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cores */}
      <div className="mb-3">
        <h4 className="text-sm font-semibold mb-2">Cores</h4>
        <div className="color-buttons">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`color-button ${selectedColor === color.name ? "selected" : ""}`}
              style={{
                backgroundColor: color.hex,
                border: selectedColor === color.name ? "2px solid black" : "1px solid gray"
              }}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      </div>

      {/* Tamanhos */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Tamanho</h4>
        <div className="size-buttons">
          {sizesText.map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? "selected" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="size-buttons mt-2">
          {sizesNumbers.map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? "selected" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Botão Aplicar */}
      <button
        className="apply-button"
        onClick={() => onApplyFilters({ category: selectedCategory, size: selectedSize, color: selectedColor })}
      >
        Aplicar
      </button>

      {/* Botão Limpar */}
      <button className="clear-button" onClick={handleClearFilters}>
        Limpar Filtro
      </button>
    </div>
  );
};

export default Filters;