import React from 'react';
import{Nav,Navbar,link} from 'react-bootstrap'
function NavBar() {
  return (
      <div className="container">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Company logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
       
     
      </Nav>
      <Nav>
      <Nav.Link href="/">News</Nav.Link>
      <Nav.Link href="/service">Service</Nav.Link>
      <Nav.Link href="/company">Company</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
   
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
  );
}

export default NavBar;