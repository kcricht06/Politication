import React, { Component } from 'react';
import '../index.css';
import Footer from './footer';
// import leg from '../../public/api/Legislators.json';
// import AddressComponent from './address-components.js';
// import axios from 'axios';
// import Request from 'superagent';
class LegName extends Component {
  constructor(props){
    super(props);
    this.state = {
      contact:''
    }
  }

  handleClick(e){
    e.preventDefault();

  }

  render(){

    console.log(this.props.urlOne)

    return(
      <div id="legs">

        <ul>
          <a onClick={this.handleClick} href={this.props.contactOne}><li className="legName">{this.props.nameOne}</li></a>
          <a onClick={this.handleClick} href={this.props.contactTwo}><li className="legName">{this.props.nameTwo}</li></a>

          <Footer onClick={this.handleClick} />
        </ul>
      </div>
    )
  }
}


export default LegName;
