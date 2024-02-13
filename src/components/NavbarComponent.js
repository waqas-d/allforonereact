import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/NavbarStyle.css';


function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="primary" className="navHeight" >
      <Container className="homeStyle">
        <Navbar.Brand href="#home" className="navStyle">All For One</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to={'/'}  >Home</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;