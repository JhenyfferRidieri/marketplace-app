import React from 'react';
import { Modal } from 'antd';

function ProductModal({ product, open, onClose }) {
  return (
    <Modal
      title={product?.name}
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <img src={product?.image_url} style={{ width: '100%', marginBottom: 15 }} />
      <p>{product?.details}</p>
      <h3>R$ {product?.price}</h3>
    </Modal>
  );
}

export default ProductModal;