import React, { Component } from 'react';
import '../index.css';
import Iframe from 'react-iframe';
import Header from './header';
import AddressComponent from './address-components';

class Footer extends Component{


  render(){

    return(
      <div id="foot">
        <div className="row">
          <iframe id="iframe1" src={this.props.newFrame1}></iframe>
          <iframe id="iframe2" src={this.props.newFrame2}></iframe>

      </div>
      </div>
    )
  }
}

export default Footer;
