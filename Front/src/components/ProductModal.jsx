import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { FiShoppingCart } from 'react-icons/fi';
import "../styles/ProductModal.css"; 

function ProductModal({ product, open, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <Modal title={product?.name} open={open} onCancel={onClose} footer={null} width={700}>
      <img src={product?.image_url} style={{ width: '100%', marginBottom: 15, borderRadius: 8 }} />
      <p style={{ marginBottom: 10 }}>{product?.details}</p>
      <h3 style={{ fontWeight: 'bold', marginBottom: 15 }}>R$ {product?.price}</h3>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Tamanhos disponíveis:</h4>
        <div className="size-buttons">
          {product?.available_sizes?.map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`} 
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <Button
        type="primary"
        icon={<FiShoppingCart size={16} />}
        className="flex items-center justify-center gap-2 w-full"
        onClick={() => onAddToCart(product, selectedSize)}
      >
        Adicionar ao Carrinho
      </Button>
    </Modal>
  );
}

export default ProductModal;