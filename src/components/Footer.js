import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import TM from "../images/tm.jpg"
function Footer() {
    return (
        
  <Navbar className="bottom">
    <img className="tm"src={TM} alt="TM"></img>
    <Navbar.Brand href="#">2020 Chris Behrens</Navbar.Brand>
  </Navbar>
    )}

export default Footer