import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function ProductCard({ product, onClick }) {
  const header = <img alt={product.name} src={product.image_url} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />;

  const footer = (
    <Button label="Ver detalhes" icon="pi pi-info" onClick={() => onClick(product)} />
  );

  return (
    <Card title={product.name} subTitle={`R$ ${product.price}`} header={header} footer={footer}>
      {product.seller}
    </Card>
  );
}

export default ProductCard;