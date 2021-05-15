import React, {useState} from "react";
import BorderCountry from "./BorderCountry"
// import styles from "./compStyles/DetailContent.module.css";


function DetailContent(props){
  // const [border, setBorder] = useState("");
  // function handleBorder(e){
  //   setBorder(e.target.value);
  // }

  return(
    <div className="detail row"  >

        <img
          src = {props.flag}
          alt = {props.name}
        />

      <div className="detailsTitle ">
        <h1>{props.name}</h1>

          <div className="detailsText row">
            <div className="detailsTextRow1">
              <h2>Native Name: <span className="h2diff">{props.nativeName}</span></h2>
              <h2>Population: <span className="h2diff">{props.population}</span></h2>
              <h2>Region: <span className="h2diff">{props.region}</span></h2>
              <h2>Sub Region: <span className="h2diff">{props.subregion}</span></h2>
              <h2>Captial: <span className="h2diff">{props.capital}</span></h2>
            </div>
            <div className="detailsTextRow2">
              <h2>Top Level Domain: <span className="h2diff">{props.topLevelDomain}</span></h2>
              <h2>Currencies: <span className="h2diff">{props.currency}</span></h2>
              <h2>Languages: <span className="h2diff">{props.languages}</span></h2>
            </div>
          </div>

        <div id="neighbor" className="countryNeighbor row ">
        <h1 className="neighborTitle">Border Countries:</h1>
          {props.borderCountry.map((countries, index)=>(
              <BorderCountry  key={index} borderCountry={countries}/>
          ))}



        </div>
      </div>

    </div>

  );
}
export default DetailContent;
