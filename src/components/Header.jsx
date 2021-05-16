import React from "react";
import {Navbar, Button, Form, Nav} from "react-bootstrap";


function Header(props){

  return(

    <Navbar className=" bg-light justify-content-between fixed-top " style={{position:"sticky"}} expand="lg" collapseOnSelect  >
      <Navbar.Brand className="navBrand" >Where in the world?</Navbar.Brand>
      <Nav >
            <Button variant="dark"  size="sm">{props.darkMode ? "Light mode" : "Dark Mode"}</Button>
      </Nav>
    </Navbar>
  );
}
export default Header;


// onClick={props.onDarkMode}
