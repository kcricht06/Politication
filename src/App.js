import React, { Component } from 'react';
import './App.css';
import dotenv from 'dotenv';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AddressComponent from './components/address-components.js';
import LegName from './components/leg-name.js';
import ParseContact from './analysis/parse-contact-congress.js';
class App extends Component {




  render() {
    return (
      <Router history={browserHistory}>
          <Route className="formAdd" path='/' component={AddressComponent} >
            <Route path='/leg-name' component={LegName}></Route>
          </Route>
      </Router>
    );
  }
}

export default App;
