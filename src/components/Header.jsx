import React from "react";
import {Navbar, Button, Form, Nav} from "react-bootstrap";


function Header(props){

  return(

    <Navbar className=" bg-light justify-content-between fixed-top " style={{position:"sticky"}} expand="lg" collapseOnSelect  >
      <Navbar.Brand className="navBrand" >Where in the world?</Navbar.Brand>
      <Nav >
            <Button variant="dark" onClick={props.onDarkMode} size="sm">{props.darkMode ? "Light mode" : "Dark Mode"}</Button>
      </Nav>
    </Navbar>


  );
}
export default Header;
// <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// <Button variant="primary" size="lg">Dark Mode</Button>
// <Nav.Link >Dark Mode</Nav.Link>
// className="justify-content-end"
