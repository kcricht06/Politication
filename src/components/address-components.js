import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LegName from './leg-name';
import leg from '../../public/api/Legislators.json';
import '../App.css';

class AddressComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      home: '',
      name1: '',
      name2: ''
    }
    contextTypes: {
        router: React.PropTypes.object
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


    handleChange(event) {
      this.setState({home: event.target.value});

      var o = [];
      for (var i=0; i<leg.length; i++){
          var party = leg[i].terms.slice(-1)[0].party;
          var names = leg[i].name.official_full;
          if (leg[i].terms.slice(-1)[0].type === "sen" && leg[i].terms.slice(-1)[0].state === event.target.value){
            console.log("hello");
            o.push(names, party);
            console.log(o);
            // console.log(o[0]);
            this.setState({name1: "Senator " + o[0] + ", " + o[1] });
            this.setState({name2: "Senator " + o[2] + ", " + o[3] });


          }
        }
      // let newState = event.target.value;
      console.log('value', event.target.value);
      // return newState
    }





    handleSubmit(e) {
      console.log('A state was submitted: ' + this.refs.newState.value);
      e.preventDefault();
  }


    sendValue(){
      browserHistory.push('/leg-name' + this.refs.newState.value);
  }


    render(){
      // var transitionTo = Router.transitionTo;
      //
      // transitionTo('/leg-name', query={keyword: this.props.params.test});
    return(
      <div className="addForm">
      <form onSubmit= {this.handleSubmit}>
          <fieldset>
              <legend>Enter Your Address</legend>

              <label htmlFor='name'>Street Address
                  <input id='address' name='address' placeholder="1600 Pennsylvania Ave NW" type='text' />
              </label>

              <label htmlFor='city'>City
                  <input id='city' name='city' placeholder="Washington, D.C." type='text' />
              </label>

              <label htmlFor='state'>State
                  <select id='state' name='state' ref="newState" onChange={this.handleChange}>
                  	<option value="AL">Alabama</option>
                  	<option value="AK">Alaska</option>
                  	<option value="AZ">Arizona</option>
                  	<option value="AR">Arkansas</option>
                  	<option value="CA">California</option>
                  	<option value="CO">Colorado</option>
                  	<option value="CT">Connecticut</option>
                  	<option value="DE">Delaware</option>
                  	<option value="FL">Florida</option>
                  	<option value="GA">Georgia</option>
                  	<option value="HI">Hawaii</option>
                  	<option value="ID">Idaho</option>
                  	<option value="IL">Illinois</option>
                  	<option value="IN">Indiana</option>
                  	<option value="IA">Iowa</option>
                  	<option value="KS">Kansas</option>
                  	<option value="KY">Kentucky</option>
                  	<option value="LA">Louisiana</option>
                  	<option value="ME">Maine</option>
                  	<option value="MD">Maryland</option>
                  	<option value="MA">Massachusetts</option>
                  	<option value="MI">Michigan</option>
                  	<option value="MN">Minnesota</option>
                  	<option value="MS">Mississippi</option>
                  	<option value="MO">Missouri</option>
                  	<option value="MT">Montana</option>
                  	<option value="NE">Nebraska</option>
                  	<option value="NV">Nevada</option>
                  	<option value="NH">New Hampshire</option>
                  	<option value="NJ">New Jersey</option>
                  	<option value="NM">New Mexico</option>
                  	<option value="NY">New York</option>
                  	<option value="NC">North Carolina</option>
                  	<option value="ND">North Dakota</option>
                  	<option value="OH">Ohio</option>
                  	<option value="OK">Oklahoma</option>
                  	<option value="OR">Oregon</option>
                  	<option value="PA">Pennsylvania</option>
                  	<option value="RI">Rhode Island</option>
                  	<option value="SC">South Carolina</option>
                  	<option value="SD">South Dakota</option>
                  	<option value="TN">Tennessee</option>
                  	<option value="TX">Texas</option>
                  	<option value="UT">Utah</option>
                  	<option value="VT">Vermont</option>
                  	<option value="VA">Virginia</option>
                  	<option value="WA">Washington</option>
                  	<option value="WV">West Virginia</option>
                  	<option value="WI">Wisconsin</option>
                  	<option value="WY">Wyoming</option>
                  </select>
              </label>

              <label htmlFor='zip'>Zip Code
                  <input id='zip' name='zip' placeholder="20500" type='text' />
              </label>


              <input value='Submit' type='submit' />
          </fieldset>
      </form>
      <LegName newState={this.state.home} nameOne={this.state.name1} nameTwo={this.state.name2}/>
    </div>
    )
  }
}


export default AddressComponent;
