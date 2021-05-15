import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  onKeyPress,

}){
  return(


    <form onSubmit={onSubmitHandler}>
      <div className="input-group mb-3 input-group-sm">
        <div id="searchIcon" className="input-group-prepend">
          <span className="input-group-text"><FontAwesomeIcon icon={faSearch}/></span>
        </div>
        <input className="form-control" type="text"
          placeholder={"Search for a country..."}
          value={searchTerm}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </form>


  );

}
//
    // </div>
// <div className="input-group mb-3">
//   <div className="input-group-prepend">
//     <button type="button" className="btn btn-outline-secondary" id="button-addon1">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// <button type="button" className="btn btn-outline-secondary" id="button-addon1">
//    <span className="glyphicon glyphicon-search"></span>
// </button>
export default SearchBar;
