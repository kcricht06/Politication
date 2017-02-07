import React, { Component } from 'react';
import leg from '../../public/api/Legislators.json';
import AddressComponent from './address-components.js';
import

class LegName extends Component {
  constructor(props){
    super(props);

  }

  // componentDidMount() {
  //   $.ajax({
  //     url: 'https://congressforms.eff.org',
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // }
  render(){



    return(
      <div>

        <ul>
          <li>{this.props.nameOne}</li>
          <li>{this.props.nameTwo}</li>
        </ul>
      </div>
    )
  }
}


export default LegName;
