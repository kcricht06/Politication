import React, { Component } from 'react';
import Header from './header.js';
import '../index.css';
import '../form.css';
class FormFill extends Component{

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

      		   <form method="post" action="/">

                    <div>
              		      <label for="$NAME_PREFIX">
              		      <span>Prefix</span>
              			      <select id="$NAME_PREFIX" name="$NAME_PREFIX" tabindex="4">
              			         <option value="mr">Mr.</option>
              			         <option value="miss">Ms.</option>
              			         <option value="mrs">Mrs.</option>
              			      </select>
              		      </label>
              			</div>
                    <div>
            		      <label for="$NAME_FIRST">
            		      	<span className="required">First Name: *</span>
            		      	<input type="text" id="name" name="name" value="" placeholder="Your Name" required="required" tabindex="1" autofocus="autofocus" />
            		      </label>
            			</div>
                  <div>
                    <label for="$NAME_LAST">
                      <span className="required">Last Name: *</span>
                      <input type="text" id="name" name="name" value="" placeholder="Your Name" required="required" tabindex="1" autofocus="autofocus" />
                    </label>
                </div>
                <div>
                  <label for="$NAME_LAST">
                    <span className="required">Last Name: *</span>
                    <input type="text" id="name" name="name" value="" placeholder="Your Name" required="required" tabindex="1" autofocus="autofocus" />
                  </label>
              </div>
            			<div>
            		      <label for="email">
            		      	<span className="required">Email: *</span>
            		      	<input type="email" id="email" name="email" value="" placeholder="Your Email" tabindex="2" required="required" />
            		      </label>
            			</div>
            			<div>
            		      <label for="subject">
            		      <span>Subject: </span>
            			      <select id="subject" name="subject" tabindex="4">
            			         <option value="hello">Product Price Question</option>
            			         <option value="quote">Where are my dragons?!</option>
            			         <option value="general">- Valar Morghulis - </option>
            			      </select>
            		      </label>
            			</div>
            			<div>
            		      <label for="message">
            		      	<span className="required">Message: *</span>
            		      	<textarea id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required"></textarea>
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
