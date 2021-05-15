import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function DropMenu(props){
  return(
    <Dropdown >
    <Dropdown.Toggle  variant="success"  id="dropdown-basic" >
      Filter By Region
    </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item eventKey="Africa" onSelect={props.onSelect}>Africa</Dropdown.Item>
        <Dropdown.Item eventKey="America"onSelect={props.onSelect} >America</Dropdown.Item>
        <Dropdown.Item eventKey="Asia" onSelect={props.onSelect}>Asia</Dropdown.Item>
        <Dropdown.Item eventKey="Europe"onSelect={props.onSelect}>Europe</Dropdown.Item>
        <Dropdown.Item eventKey="Oceania"onSelect={props.onSelect}>Oceania</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>

  );
}

export default DropMenu;
// className="dropDown"
