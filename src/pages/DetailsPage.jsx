import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';



import { Link } from "react-router-dom";
import DetailContent from "../components/DetailContent";
function DetailsPage({match}){
  let{
    params: {country}
  } = match;

  const [item, setItem ] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const API_BASE_URL = "https://restcountries.com/v2/name/";
  const API_BASE_THREEAPLHA = "https://restcountries.com/v2/alpha/";
  let api = "";
  //darkmode half assed attempt
  // const storedDarkMode = localStorage.getItem("DARK_MODE");
  // const [darkMode, setDarkMode] = useState(storedDarkMode);
  // function onDarkMode(){
  //   setDarkMode(darkMode ? false: true);
  // }

  useEffect(() =>{
    // localStorage.setItem("DARK_MODE", darkMode);
    if(country.length != 3){
      api = API_BASE_URL  + country;
    }else{
      api = API_BASE_THREEAPLHA  + country;
      setIsLoaded(false);
    }
    console.log(api);

    let unmounted = false;

   fetch(api)
    .then(res => res.json())
    .then(
      (result) => {
        if(!unmounted){
          if(!(result instanceof Array)){
            result = [result];
            setItem(result);
          }
          setItem(result);
          setIsLoaded(true);
          }
        },
        (error) =>{
          if(!unmounted){
            setIsLoaded(true);
            setError(error);
          }
        }
      );
    // }, [country, darkMode]);
    }, [country]);
  if(error){
      return
         <div>Error: {error.message}</div>

    } else if (!isLoaded){
      return <div>Loading...</div>
    } else{
      return(
        // <div data-theme={darkMode ? "dark" : "light"}>
        <div>
          <Header
              // onClick={onDarkMode}
          />
          <Link to="/" id="backButton" className="btn btn-primary"><FontAwesomeIcon icon={faArrowLeft}/>back</Link>
           <DetailContent
                    name={item[0].name}
                    flag={item[0].flag}
                    population={item[0].population}
                    capital={item[0].capital}
                    region={item[0].region}
                    subregion={item[0].subregion}
                    borderCountry={item[0].borders}
                    nativeName={item[0].nativeName}
                    topLevelDomain={item[0].topLevelDomain}
                    currency={item[0].currencies[0].name}
                    languages={item[0].languages[0].name}
                  />
        </div>
        );
      }
}

export default DetailsPage;
