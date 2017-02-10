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
        <Iframe id="iframe" className="col-md-3" url={this.props.newFrame1} height="700px" width="700px" />
        
      </div>
      </div>
    )
  }
}

export default Footer;
