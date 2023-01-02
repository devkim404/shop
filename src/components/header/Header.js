import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <Navbar bg="light" variant="light">
      <Container className="container-xxl" fluid>
        <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
