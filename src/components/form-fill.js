import React, { Component } from 'react';
import Header from './header.js';
import '../index.css';
import '../form.css';
import axios from 'axios';
class FormFill extends Component{
  constructor(props){
    super(props);

    this.state = {
      $NAME_PREFIX:'',
      $NAME_FIRST:'',
      $NAME_LAST:'',
      $ADDRESS_STREET:'',
      $ADDRESS_CITY:'',
      $ADDRESS_ZIP5:'',
      $EMAIL:'',
      $TOPIC:'',
      $MESSAGE:'',
      newOptions:'',
      bioguide:''

    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  // getBioGuide(e){
  //   e.preventDefault();
  //   this.setState({bioguide: this.props.bioGuide});
  //   console.log('hello', this.props.bioGuide);
  //
  // }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      $NAME_PREFIX: event.target.$NAME_PREFIX,
      $NAME_FIRST: event.target.$NAME_FIRST,
      $NAME_LAST: event.target.$NAME_LAST,
      $ADDRESS_STREET: event.target.$ADDRESS_STREET,
      $ADDRESS_CITY: event.target.$ADDRESS_CITY,
      $ADDRESS_ZIP5: event.target.$ADDRESS_ZIP5,
      $EMAIL: event.target.$EMAIL,
      $TOPIC: event.target.$TOPIC,
      $MESSAGE: event.target.$MESSAGE,
      newOptions: this.props.newOptions,
      bioguide: this.props.bioGuide


    });
    var request = require('request');

    var headers = {
      'Content-Type': 'application/json'
    };

    var dataString = this.state;
    console.log(dataString)
    var options = {
      url: 'http://localhost:5000/apiSend',
      method: 'POST',
      headers: headers,
      body: dataString
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
    }
    alert('Your message has been sent!')
    request(options, callback);;
  }

  // handleSubmit(e){
  //   e.preventDefault();
  // }

  render(){
    return(
      <div>

        <div id="contact-form">
        	<div>
        		<h1>Message Your Senators!</h1>
            <p>{this.state.bioguide}</p>
        		<h4>Make sure to be polite and concise.</h4>
        	</div>
        		<p id="failure">Oopsie...message not sent.</p>
        		<p id="success">Your message was sent successfully. Thank you!</p>

      		   <form id="forms" method="post" action="http://localhost:5000/apiSend">

                <div>
        		      <label htmlFor="$NAME_PREFIX">
          		      <span>Prefix </span>
          			      <select  onChange={this.handleSubmit} id="$NAME_PREFIX" name="$NAME_PREFIX" tabIndex="4" value={this.state.$NAME_PREFIX}>
          			         <option value="mr">Mr.</option>
          			         <option value="miss">Ms.</option>
          			         <option value="mrs">Mrs.</option>
          			      </select>
        		      </label>
        		   </div>
               <div>
        		      <label htmlFor="$NAME_FIRST">
        		      	<span className="required">First Name: </span>
        		      	<input  onChange={this.handleSubmit} type="text" id="name" name="name" value={this.state.$NAME_FIRST} placeholder="Your First Name" required="required" tabIndex="1" />
        		      </label>
        			 </div>
               <div>
                  <label htmlFor="$NAME_LAST">
                    <span className="required">Last Name: </span>
                    <input  onChange={this.handleSubmit} type="text" id="lname" name="lname" value={this.state.$NAME_LAST} placeholder="Your Last Name" required="required" tabIndex="1" />
                  </label>
               </div>
               <div>
                  <label htmlFor="$ADDRESS_STREET">
                    <span className="required">Street Address: </span>
                    <input  onChange={this.handleSubmit} type="text" id="$ADDRESS_STREET" name="$ADDRESS_STREET" value={this.state.$ADDRESS_STREET} placeholder="Address" required="required" tabIndex="1" />
                  </label>
               </div>
               <div>
                <label htmlFor="$ADDRESS_CITY">
                  <span className="required">City: </span>
                  <input  onChange={this.handleSubmit} type="text" id="$ADDRESS_CITY" name="$ADDRESS_CITY" value={this.state.$ADDRESS_CITY} placeholder="City" required="required" tabIndex="1" />
                </label>
               </div>
               <div>
              <label htmlFor="$ADDRESS_ZIP5">
                  <span className="required">Zip Code: </span>
                  <input  onChange={this.handleSubmit} type="text" id="$ADDRESS_ZIP5" name="$ADDRESS_ZIP5" value={this.state.$ADDRESS_ZIP5} placeholder="Zip Code" required="required" tabIndex="1" />
              </label>
               </div>
        			 <div>
        		      <label htmlFor="$EMAIL">
        		      	<span className="required">Email: </span>
        		      	<input  onChange={this.handleSubmit} type="email" id="$EMAIL" name="$EMAIL" value={this.state.$EMAIL} placeholder="Your Email" tabIndex="2" required="required" />
        		      </label>
            	 </div>
            	 {/* <div>
        		      <label htmlFor="$TOPIC">
        		      <span>Topic: </span>
        			      <select onChange={this.handleSubmit} id="$TOPIC" name="$TOPIC" value={this.state.$TOPIC} tabIndex="4">
                       <option value="">-Select a Topic-</option> */}
        			         {/* <option value="Agriculture">Agriculture</option>
                       <option value="Animal Welfare">Animal Welfare</option>
                       <option value="Arts & Humanities">Arts & Humanities</option>
                       <option value="Auto Industry">Auto Industry</option>
                       <option value="Civil Rights">Civil Rights</option>
                       <option value="Consumer Protection">Consumer Protection</option>
                       <option value="Defense and Military">Defense & Military</option>
                       <option value="Economic Recovery">Economic Recovery</option>
                       <option value="Education">Education</option>
                       <option value="Election & Campaign Finance Reform">Election & Campaign Finance Reform</option>
                       <option value="Energy">Energy</option>
                       <option value="Environment">Environment</option>
                       <option value="Federal Budget">Federal Budget</option>
                       <option value="Financial Regulation & Banking">Financial Regulation & Banking</option>
                       <option value="Foreign Policy">Foreign Policy</option>
                       <option value="Gun Control">Gun Control</option>
                       <option value="Healthcare Policy">Healthcare Policy</option>
                       <option value="Homeland Security">Homeland Security</option>
                       <option value="Housing">Housing</option>
                       <option value="Immigration">Immigration</option>
                       <option value="Internship">Internship Information</option>
                       <option value="Jobs/Employment">Jobs/Employment</option>
                       <option value="Judiciary & Government Oversight">Judiciary & Government Oversight</option>
                       <option value="Labor">Labor</option>
                       <option value="Law Enforcement">Law Enforcement</option>
                       <option value="Manufacturing">Manufacturing</option>
                       <option value="Pensions">Pensions</option>
                       <option value="Postal Services">Postal Services</option>
                       <option value="Reproductive Rights">Reproductive Rights</option>
                       <option value="Request for Help">Request for Help with Federal Agency</option>
                       <option value="Science & NASA">Science & NASA</option>
                       <option value="Service Academies">Service Academy Nominations (Military Academy)</option>
                       <option value="Social Security">Social Security</option>
                       <option value="Taxes">Taxes</option>
                       <option value="Telecommunications">Telecommunications</option>
                       <option value="Transportation">Transportation</option>
                       <option value="Veterans Policy">Veterans Policy</option>
                       <option value="Welfare & Poverty">Welfare & Poverty</option> */}

        			      {/* </select>
        		      </label>
            	 </div> */}
            	 <div id="messageForm">
        		      <label htmlFor="message">
        		      	<span className="required">Message: </span>
        		      	<textarea  onChange={this.handleSubmit} id="message" value={this.state.$MESSAGE} name="message" placeholder="Please write your message here." tabIndex="5" required="required"></textarea>
        		      </label>
            	 </div>
            	 <div>
        		      <button onChange={this.handleSubmit} name="submit" type="submit" id="submitForm" >SEND</button>
            	 </div>
            		   </form>

            	</div>
      </div>
    )
  }
}

export default FormFill;
