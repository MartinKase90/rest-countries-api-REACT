import React from "react";
import {Link} from "react-router-dom";

function BorderCountry(props){

  // let url = "/country/" + props.borderCountry;

  return(
     <Link to={"/country/"+ props.borderCountry} id="borderLink" className="btn btn-outline-primary">{props.borderCountry}</Link>
    // <button onClick={props.handleBorder} value={props.borderCountry} className="btn btn-outline-primary">{props.borderCountry}</button>
  );
}
export default BorderCountry;
