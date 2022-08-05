import { Navbar, Container, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
function Navtop() {
  return (
    <div>
      <Navbar fixed="top" bg="dark " variant="dark">
        <Container>
          <Navbar.Brand href="/">IKAT</Navbar.Brand>
          <Nav className="me-auto fw-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/disease-detection">Disease Detection</Nav.Link>
            <Nav.Link href="/crop-prediction">Crop Prediction</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navtop;
