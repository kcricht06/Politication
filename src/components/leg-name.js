import React, { Component } from 'react';
import leg from '../../public/api/Legislators.json';
import AddressComponent from './address-components.js'

class LegName extends Component {
  constructor(props){
    super(props);

    this.state= {
      name1: '',
      name2: '',
      state: '',
      party: ''
    }
  }


  componentWillMount() {
    var o = [];
    for (var i=0; i<leg.length; i++){
        var names = leg[i].name.official_full;
        if (leg[i].terms.slice(-1)[0].type === "sen"){
          o.push(names)
          console.log(leg[i]);
          console.log(o);
          this.setState({name1: "Senator " + o[Math.floor(Math.random()*o.length)] });
          this.setState({name2: "Senator " + o[Math.floor(Math.random()*o.length)] });

        }
        // if ()
  }
}




  render(){

console.log();
    return(
      <div>
        <ul>
          <li>{this.state.name1}</li>
          <li>{this.state.name2}</li>
        </ul>
      </div>
    )
  }
}


export default LegName;
