import React, {useState} from "react";
// import Card from 'react-bootstrap/Card';

// import styles from "./compStyles/Country.module.css";
import { Link } from "react-router-dom";


function Country(props){



  return (



    //unique country === numericCode from api
    <Link className="note" to={"/country/" + props.name} >
      <div >
        <img
          src ={props.flag}
          alt = {props.name}
        />
        <h1>{props.name}</h1>
        <div>
          <h2>Population: <span className="h2diff">{props.population}</span></h2>
          <h2>Region: <span className="h2diff">{props.region}</span></h2>
          <h2>Captial: <span className="h2diff">{props.capital}</span></h2>
        </div>
      </div>
      </Link>
  );
}

// <h2>Population: </h2>
// <h2>Region: </h2>
// <h2>Captiol: </h2>
export default Country;
