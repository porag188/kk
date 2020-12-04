import React from 'react';
import{Nav,Navbar,link} from 'react-bootstrap'
function NavBar() {
  return (
      <div >
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <div className="container">
    <Navbar.Brand className="logo" href="#home">Company logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse  id="responsive-navbar-nav">
      <Nav className="mr-auto">
       
     
      </Nav>
      <Nav className="navbar">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/service">Service</Nav.Link>
      <Nav.Link href="/company">Company</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
   
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>
  </div>
  );
}

export default NavBar;