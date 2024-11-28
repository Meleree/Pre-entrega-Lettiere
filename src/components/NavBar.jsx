import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';  
import melereImage from '../assets/melere.webp';  
import CartWidget from './CartWidget';  
import './navbar.css';  

const NavBar = () => {
  return (
    <div className="navbar-container">
      {/* Imagen del logo */}
      <img src={melereImage} alt="Melere" className="navbar-logo" />

      {/* Barra de navegación */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#abrigos">Abrigos</Nav.Link>
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
          </Nav>

          <div className="navbar-cart">
            <CartWidget />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
