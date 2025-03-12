import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiTrash, FiArrowLeft } from "react-icons/fi";
import "../styles/CartPage.css";
const CartPage = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button className="back-button" onClick={() => navigate("/")}>
          <FiArrowLeft />
          Continuar Comprando
        </button>
        <h1>Carrinho de Compras</h1>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Seu carrinho está vazio.</p>
      ) : (
        <div className="cart-content">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p className="item-size">Tamanho: {item.size}</p>
                <p className="item-price">R$ {item.price.toFixed(2)}</p>
              </div>

              {/* Controles de quantidade e remover */}
              <div className="item-actions">
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>
                  <FiTrash />
                  Excluir
                </button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: R$ {getTotalPrice().toFixed(2)}</h3>
            <button className="checkout-button" onClick={() => alert("Compra finalizada!")}>
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;