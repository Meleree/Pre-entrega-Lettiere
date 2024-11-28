import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <p>Aquí van los productos...</p>
    </div>
  );
}

export default ItemListContainer;
