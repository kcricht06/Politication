import React, { Component } from 'react';
import leg from '../../public/api/Legislators.json';

class AddressComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


    handleChange(event) {
    this.setState({value: event.target.value});
    console.log('value');
    }

    handleSubmit(e) {
    console.log('A state was submitted: ' + this.state.value);
    e.preventDefault();
  }

    sendValue(){
    browserHistory.push('/leg-name/' + this.refs.textField.value);
  }




    render(){

    return(
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
                  <input id='state' name='state' placeholder="Washington, D.C." ref="textField" type='text' value={this.state.value} onChange={this.handleChange} />
              </label>

              <label htmlFor='zip'>Zip Code
                  <input id='zip' name='zip' placeholder="20500" type='text' />
              </label>


              <input  onSubmit={() => {this.sendValue()}} type='submit' />
          </fieldset>
      </form>
    )
  }
}


export default AddressComponent;
