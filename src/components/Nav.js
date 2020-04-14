import React from 'react'
import {Navbar, Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navmenu() {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand  className="name" href="#home">Chris Behrens </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Portfolio</Nav.Link>
    <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )}

export default Navmenu