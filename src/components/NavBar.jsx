import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar({ bg, theme }) {
  return (
    <Navbar bg={bg} data-bs-theme={theme}>
      <Container>
        <img src="../src/assets/melere.webp" alt="Logo" />
        <Nav className="me-auto">
          <Nav.Link href="#abrigos">Abrigos</Nav.Link>
          <Nav.Link href="#remeras">Remeras</Nav.Link>
          <Nav.Link href="#accesorios">Accesorios</Nav.Link>
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
