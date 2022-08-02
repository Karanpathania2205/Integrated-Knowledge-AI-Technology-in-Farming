import { Navbar, Container, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
function Navtop() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">IKAT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Disease Detection</Nav.Link>
            <Nav.Link href="#pricing">Crop Prediction</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navtop;
