import React, { Component } from 'react';
import './App.css';
import dotenv from 'dotenv';
import AddressComponent from './components/address-components.js'
class App extends Component {




  render() {
    return (
      <div className="App">
        <AddressComponent />
      </div>
    );
  }
}

export default App;
