import React from 'react';
import { Badge } from 'react-bootstrap'; 
import cartLogo from '../assets/bolsa.webp'; 

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget" style={{ position: 'relative' }}>
      <img src={cartLogo} alt="Carrito" style={{ width: '30px', height: '30px' }} />
      
      {itemCount > 0 && (
        <Badge
          pill
          bg="danger"
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            fontSize: '12px',
            padding: '5px',
          }}
        >
          {itemCount}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
