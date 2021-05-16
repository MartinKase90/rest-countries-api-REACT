import React from "react";
import {Link} from "react-router-dom";

function BorderCountry(props){
  return(
     <Link to={"/country/"+ props.borderCountry} id="borderLink" className="btn btn-outline-primary">{props.borderCountry}</Link>
  );
}
export default BorderCountry;
