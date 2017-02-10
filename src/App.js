import React, { Component } from 'react';
import './App.css';
// import dotenv from 'dotenv';
import { Router, Route, browserHistory } from 'react-router';
import AddressComponent from './components/address-components.js';
import LegName from './components/leg-name.js';
import FormFill from './components/form-fill.js';
import Footer from './components/footer.js';
// import ParseContact from './analysis/parse-contact-congress.js';
class App extends Component {




  render() {
    return (
      <Router history={browserHistory}>
          <Route className="formAdd" path='/' component={AddressComponent} >
            <Route path='/leg-name' component={LegName}></Route>
          </Route>
          <Route path='/form-fill' component={FormFill}></Route>
          <Route path='/footer' component={Footer}></Route>
      </Router>
    );
  }
}

export default App;
