import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/home">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link href='/maps'>Maps</Nav.Link>
            <Nav.Link href='/productos'>Productos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;


