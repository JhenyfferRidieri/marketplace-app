import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/Navbar.css";  // Arquivo de estilos separado

const Navbar = ({ cartCount, onCartClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const items = [
    { label: "Início", icon: "pi pi-home" },
    { label: "Promoções", icon: "pi pi-tags" },
    { label: "Novidades", icon: "pi pi-star" },
    { label: "Contato", icon: "pi pi-envelope" },
  ];

  const start = (
    <h1 className="navbar-title">Desafio E-commerce</h1>
  );

  const end = (
    <div className="navbar-end">
      {/* Campo de Busca Ajustado */}
      <div className="search-container">
        <i className="pi pi-search search-icon" onClick={handleSearch} />
        <InputText
          placeholder="Buscar produtos..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>

      {/* Botão do Carrinho bem posicionado */}
      <Button
        label={`Carrinho (${cartCount})`}
        icon="pi pi-shopping-cart"
        className="cart-button"
        onClick={onCartClick}
      />
    </div>
  );

  return (
    <nav className="navbar-container">
      <Menubar model={items} start={start} end={end} className="navbar-menubar" />
    </nav>
  );
};

export default Navbar;