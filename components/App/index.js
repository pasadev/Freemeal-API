// == Import npm
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';


// == Import : local
// Components

import Header from '../Header';
import Footer from '../Footer';
import Recipes from '../Recipes';

// == Import
import './styles.css';



// == Components
const App = () => {

    return(

  <div className="app">
    <Header />
      <Switch>
        <Route exact path="/">
            <Recipes/>
        </Route>
      </Switch>
    
    <Footer />
  </div>
  )
};
/*
App.propTypes = {
  burgerMenuOpen: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: null,
};
*/

// == Export
export default App;