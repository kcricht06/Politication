import React, { Component } from 'react';


class AddressComponent extends Component {
  render(){
    return(
      <form>
          <fieldset>
              <legend>Enter Your Address</legend>

              <label htmlFor='name'>Street Address
                  <input id='address' name='address' type='text' />
              </label>

              <label htmlFor='city'>City
                  <input id='city' name='city' type='text' />
              </label>

              <label htmlFor='zip'>Zip Code
                  <input id='zip' name='zip' type='text' />
              </label>

              <input type='submit' />
          </fieldset>
      </form>
    )
  }
}


export default AddressComponent;
