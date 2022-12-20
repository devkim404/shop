import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <Navbar bg="light" variant="light">
      <Container className="container-xxl" fluid>
        <Navbar.Brand>ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="">Cart</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
