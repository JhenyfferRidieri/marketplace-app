import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Navbar = () => {
  const items = [
    { label: 'Camiseta', icon: 'pi pi-tag' },
    { label: 'Regata', icon: 'pi pi-tag' },
    { label: 'Calção', icon: 'pi pi-tag' },
    { label: 'Acessório', icon: 'pi pi-tag' },
  ];

  const start = <h1 className="font-bold text-xl">Marketplace</h1>;

  const end = (
    <div className="flex gap-2 items-center">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText placeholder="   Buscar produtos..." />
      </span>
      <Button label="Perfil" icon="pi pi-user" severity="info" rounded text />
      <Button label="Carrinho" icon="pi pi-shopping-cart" severity="success" rounded />
    </div>
  );

  return (
    <nav className="shadow-md">
      <Menubar model={items} start={start} end={end} />
    </nav>
  );
};

export default Navbar;