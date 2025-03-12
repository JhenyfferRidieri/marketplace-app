import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ cartCount, onCartClick, onSearch }) => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Masculino",
      icon: "pi pi-user",
      items: [
        { label: "Camisetas", command: () => navigate("/masculino/camisetas") },
        { label: "Calçados", command: () => navigate("/masculino/calcados") },
        { label: "Acessórios", command: () => navigate("/masculino/acessorios") },
        { label: "Esportes", command: () => navigate("/masculino/esportes") },
      ],
    },
    {
      label: "Feminino",
      icon: "pi pi-user",
      items: [
        { label: "Camisetas", command: () => navigate("/feminino/camisetas") },
        { label: "Calçados", command: () => navigate("/feminino/calcados") },
        { label: "Acessórios", command: () => navigate("/feminino/acessorios") },
        { label: "Esportes", command: () => navigate("/feminino/esportes") },
      ],
    },
    {
      label: "Infantil",
      icon: "pi pi-box", 
      items: [
        { label: "Roupas", command: () => navigate("/infantil/roupas") },
        { label: "Calçados", command: () => navigate("/infantil/calcados") },
        { label: "Acessórios", command: () => navigate("/infantil/acessorios") },
      ],
    },    
    {
      label: "Ofertas",
      icon: "pi pi-tags",
      command: () => navigate("/ofertas"),
    },
    {
      label: "Lançamentos",
      icon: "pi pi-star",
      command: () => navigate("/lancamentos"),
    },
  ];

  return (
    <>
      {/* Navbar fixa */}
      <nav className="custom-navbar shadow-md">
        <div className="navbar-top">
          <h1 className="navbar-title" onClick={() => navigate("/")}>
            Desafio E-commerce
          </h1>
          <Menubar model={items} className="menu-bar" />
        </div>
      </nav>

      <div className="search-container">
        <div className="search-box">
          <i className="pi pi-search" />
          <InputText
            placeholder="Buscar..."
            className="search-input"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button
          label={`Carrinho (${cartCount})`}
          icon="pi pi-shopping-cart"
          className="cart-button"
          onClick={onCartClick}
        />
      </div>
    </>
  );
};

export default Navbar;