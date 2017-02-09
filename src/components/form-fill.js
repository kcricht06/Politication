import React, { Component } from 'react';
import Header from './header.js';
import '../index.css';
import '../form.css';
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
      $MESSAGE:''

    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    this.setState({
      $NAME_PREFIX: event.target.$PREFIX,
      $NAME_FIRST: event.target.$NAME_FIRST,
      $NAME_LAST: event.target.$NAME_LAST,
      $ADDRESS_STREET: event.target.$ADDRESS_STREET,
      $ADDRESS_CITY: event.target.$ADDRESS_CITY,
      $ADDRESS_ZIP5: event.target.$ADDRESS_ZIP5,
      $EMAIL: event.target.$EMAIL,
      $TOPIC: event.target.$TOPIC,
      $MESSAGE: event.target.$MESSAGE



    });
  }

  render(){
    return(
      <div>
        <Header />

        <div id="contact-form">
        	<div>
        		<h1>Message Your Senators!</h1>
        		<h4>Make sure to be polite and concise.</h4>
        	</div>
        		<p id="failure">Oopsie...message not sent.</p>
        		<p id="success">Your message was sent successfully. Thank you!</p>

      		   <form id="forms" method="post" action="/">

                <div>
        		      <label htmlFor="$NAME_PREFIX">
          		      <span>Prefix</span>
          			      <select id="$NAME_PREFIX" name="$NAME_PREFIX" tabIndex="4" value={this.state.$NAME_PREFIX}>
          			         <option value="mr">Mr.</option>
          			         <option value="miss">Ms.</option>
          			         <option value="mrs">Mrs.</option>
          			      </select>
        		      </label>
        		   </div>
               <div>
            		      <label htmlFor="$NAME_FIRST">
            		      	<span className="required">First Name: *</span>
            		      	<input onChange={this.handleChange} type="text" id="name" name="name" value={this.state.$NAME_FIRST} placeholder="Your First Name" required="required" tabIndex="1" />
            		      </label>
        			 </div>
               <div>
                    <label htmlFor="$NAME_LAST">
                      <span className="required">Last Name: *</span>
                      <input onChange={this.handleChange} type="text" id="lname" name="lname" value={this.state.$NAME_LAST} placeholder="Your Last Name" required="required" tabIndex="1" />
                    </label>
               </div>
               <div>
                  <label htmlFor="$ADDRESS_STREET">
                    <span className="required">Street Address: *</span>
                    <input onChange={this.handleChange} type="text" id="$ADDRESS_STREET" name="$ADDRESS_STREET" value={this.state.$ADDRESS_STREET} placeholder="Address" required="required" tabIndex="1" />
                  </label>
               </div>
               <div>
                <label htmlFor="$ADDRESS_CITY">
                  <span className="required">City: *</span>
                  <input onChange={this.handleChange} type="text" id="$ADDRESS_CITY" name="$ADDRESS_CITY" value={this.state.$ADDRESS_CITY} placeholder="City" required="required" tabIndex="1" />
                </label>
               </div>
               <div>
              <label htmlFor="$ADDRESS_ZIP5">
                <span className="required">Zip Code: *</span>
                <input onChange={this.handleChange} type="text" id="$ADDRESS_ZIP5" name="$ADDRESS_ZIP5" value={this.state.$ADDRESS_ZIP5} placeholder="Zip Code" required="required" tabIndex="1" />
              </label>
               </div>
        			 <div>
            		      <label htmlFor="$EMAIL">
            		      	<span className="required">Email: *</span>
            		      	<input onChange={this.handleChange} type="email" id="$EMAIL" name="$EMAIL" value={this.state.$EMAIL} placeholder="Your Email" tabIndex="2" required="required" />
            		      </label>
            	 </div>
            	 <div>
            		      <label htmlFor="subject">
            		      <span>Subject: </span>
            			      <select id="subject" name="subject" value={this.state.$TOPIC} tabIndex="4">
            			         <option value="hello">Product Price Question</option>
            			         <option value="quote">Where are my dragons?!</option>
            			         <option value="general">- Valar Morghulis - </option>
            			      </select>
            		      </label>
            	 </div>
            	 <div>
            		      <label htmlFor="message">
            		      	<span className="required">Message: *</span>
            		      	<textarea id="message" value={this.state.$MESSAGE} name="message" placeholder="Please write your message here." tabIndex="5" required="required"></textarea>
            		      </label>
            	 </div>
            	 <div>
            		      <button name="submit" type="submit" id="submit" >SEND</button>
            	 </div>
            		   </form>

            	</div>
      </div>
    )
  }
}

export default FormFill;
