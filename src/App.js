import React, { Component } from 'react';
import './App.css';
import dotenv from 'dotenv';
import AddressComponent from './components/address-components.js';
import LegName from './components/leg-name.js';
import ParseContact from './analysis/parse-contact-congress.js';
class App extends Component {




  render() {
    return (
      <div className="App">
        <AddressComponent />
        <LegName />
      </div>
    );
  }
}

export default App;
