import React from 'react'
import cartLogo from '../assets/bolsa.webp'

const CartWidget = () => {
  return (
    <div>
      <img src={cartLogo} alt="Carrito" />
    </div>
  );
};

export default CartWidget