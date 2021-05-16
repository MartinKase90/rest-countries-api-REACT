import React, {useState, useEffect} from "react";


import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DropMenu from "../components/DropMenu";
import Country from "../components/Country";


function Home(){

  const API_BY_ALL = "https://restcountries.eu/rest/v2/all";
  //API_BY_NAME can be partial name or native name, must add {name} at end
  const API_BY_NAME ="https://restcountries.eu/rest/v2/name/";
  //API_BY_REGION, get all by region add {region} at end
  const API_BY_REGION ="https://restcountries.eu/rest/v2/region/";
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [key, setKey] = useState("");
  const [region, setRegion] = useState("");
  //darkmode half assed attempt
  // const storedDarkMode = localStorage.getItem("DARK_MODE");
  // const [darkMode, setDarkMode] = useState(storedDarkMode);

  let api = "";


  // function onDarkMode(){
  //   setDarkMode(darkMode ? false: true);
  // }

  function onInputChange(e){
    setSearchTerm(e.target.value);

  }
  function onSubmitHandler(e){
    e.preventDefault();


  }
  function onKeyPress(e){
    if(e.key === "Enter"){
      setKey(searchTerm);


    }

  }
  function onSelect(e){
    setRegion(e);

  }


  if(key.length > 0){
    api = API_BY_NAME + key;

  } else if (region.length > 0){
    api = API_BY_REGION + region;
  }
  else if(key.length === 0){

    api = API_BY_ALL;
  }

    useEffect(() => {
      // localStorage.setItem("DARK_MODE", darkMode);
      let unmounted = false;

      fetch(api)
      .then(res => res.json())
      .then(
        (result) => {
          if(!unmounted){
            setCountries(result);
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
        return () => {unmounted = true};
      // }, [api, darkMode]);
      }, [api]);
    if(error){
        return <div>Error: {error.message}</div>
      } else if (!isLoaded){
        return <div>Loading...</div>
      } else{
      return (
        <div >
          <Header
            // onClick={onDarkMode}
          />
            <div className="row ">
              <div className=" col-lg-10 col-md-8 col-sm-11 " >
                <SearchBar
                  onSubmitHandler={onSubmitHandler}
                  onInputChange={onInputChange}
                  searchTerm={searchTerm}
                  onKeyPress={onKeyPress}
                />
              </div>
              <div className=" col-lg-2 col-md-2">
                <DropMenu
                  onSelect={onSelect}
                />
              </div>
            </div>

          {countries.map((item, index) =>(
              <Country
                alpha3Code={item.alpha3Code}
                key={index}
                name={item.name}
                flag={item.flag}
                region={item.region}
                population={item.population}
                capital={item.capital}
              />
            ))}
        </div>
      );
    }
  }
export default Home;
