import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function ProductCard({ product, onClick }) {
  const header = <img alt={product.name} src={product.image_url} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />;

  const footer = (
    <Button 
    label="Ver detalhes" 
    icon="pi pi-info" 
    className="bg-blue-500 text-sm w-full px-3 py-2 rounded-md hover:bg-blue-600 transition-all"
  />  
  );

  return (
    <Card title={product.name} subTitle={`R$ ${product.price}`} header={header} footer={footer}>
      {product.seller}
    </Card>
  );
}

export default ProductCard;