import React, { Component } from 'react';
import '../index.css';
// import leg from '../../public/api/Legislators.json';
// import AddressComponent from './address-components.js';
// import axios from 'axios';
// import Request from 'superagent';
class LegName extends Component {
  // constructor(props){
  //   super(props);
  //
  // }
  // componentDidMount(){

  // }
  // componentDidMount(){
  // var url = "https://congressforms.eff.org/retrieve-form-elements/"
  //   Request.post(url)
  //     .set({'bio_ids': 'C000880'})
  //     .then((response) => {
  //       console.log('response', response);
  //       // this.setState({
  //       //   soccerdata: response.body.name,
  //       //   crestUrl: response.body.crestUrl
  //       })
  //
  //   }

  render(){



    return(
      <div id="legs">

        <ul>
          <li className="legName">{this.props.nameOne}</li>
          <li className="legName">{this.props.nameTwo}</li>
        </ul>
      </div>
    )
  }
}


export default LegName;
