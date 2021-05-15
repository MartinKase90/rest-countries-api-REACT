import React from "react";

import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
require('dotenv').config()

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const NoMatchRoute = () => <div>404 Page</div>;

import 'bootstrap/dist/css/bootstrap.min.css';
function App(){

  return(
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/country/:country" exact component={DetailsPage}/>        
        </Switch>
    </Router>
  );
}

export default App;
