import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import LegName from './leg-name';
import Header from './header';
import FormFill from './form-fill';
import Footer from './footer';
import leg from '../../public/api/Legislators.json';
import '../App.css';
import axios from 'axios';

class AddressComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      home: '',
      name1: '',
      name2: '',
      topics1:'',
      topics2:'',
      bioguide:'',
      contact1:'',
      contact2:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


    handleChange(event) {
      this.setState({home: event.target.value});
      var o = [];
      var bio_ids = [];
      // var production = window.location.hostname === 'localhost' ? false : true;
      // production = false;
      var apiAddress ='http://localhost:5000/api';


      for (var i=0; i<leg.length; i++){
          var party = leg[i].terms.slice(-1)[0].party;
          var names = leg[i].name.official_full;
          var bioguide = leg[i].id.bioguide;
          if (leg[i].terms.slice(-1)[0].type === "sen" && leg[i].terms.slice(-1)[0].state === event.target.value){
            var url=leg[i].terms.slice(-1)[0].contact_form;
            // console.log(url)
            var rss=leg[i].terms.slice(-1)[0].rss_url;
            // console.log(url, rss)
            o.push(names, party, url);
            console.log(o)

            bio_ids.push(bioguide)

            this.setState({
              name1: "Senator " + o[0] + ", " + o[1],
              name2: "Senator " + o[3] + ", " + o[4],
              contact1: o[2],
              contact2: o[5],
              bioguide: bio_ids


            });
            axios.post('http://localhost:5000/api', {
              bio_ids: bio_ids
            })
            .then(function (resp) {
              var parse = JSON.parse(resp.data);
              for (var prop in parse) {
                // console.log('obj.' + prop, '=', parse[prop].required_actions);
                var topic = parse[prop].required_actions;
                // console.log(parse[prop]);
                // console.log(topic)
                for(var x=0; x< topic.length; x++){
                  if (topic[x].value == "$TOPIC"){
                    // console.log(topic[x].options_hash);
                    var opt = topic[x].options_hash;
                    // console.log(opt);
                    for (var option in opt){
                      // console.log('obj.' + option, '=', opt[option]);
                      var options = option;
                      // console.log(options);

                     }
                   }
                  }
                }
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        }
    }

    handleOptionChange(resp, e){
      e.preventDefault();
        var parse = JSON.parse(resp.data);
        for (var prop in parse) {
          // console.log('obj.' + prop, '=', parse[prop].required_actions);
          var topic = parse[prop].required_actions;
          // console.log(topic)
          for(var x=0; x< topic.length; x++){
            if (topic[x].value == "$TOPIC"){
              // console.log(topic[x].options_hash);
              var opt = topic[x].options_hash;
              console.log(opt)
              // console.log(opt)
              // console.log(opt);
              for (var option in opt){
                // console.log('obj.' + option, '=', opt[option]);
                var options = option;
                console.log(options);
                this.setState({
                  topics1: options,
                  topics2: options
                })
              }
            }
          }
        }
      }





    handleSubmit(e) {
      browserHistory.push('/form-fill' + this.state.bio_ids)
      // e.preventDefault();


  }


    sendValue(){
      browserHistory.push('/leg-name' + this.refs.newState.value);
  }


    render(){

    return(
      <div className="addForm">
        <Header />
      <form className="control-label" onSubmit={this.handleSubmit}>
          <fieldset>
              <legend>Choose your state to message your senators</legend>

                  <select className="selectpicker" id='state' name='state' ref="newState" onChange={this.handleChange}>
                    <option value=""></option>
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


          </fieldset>
      </form>
      <LegName
        newState={this.state.home}
        nameOne={this.state.name1}
        nameTwo={this.state.name2}
        urlOne={this.state.url1}
        urlTwo={this.state.url2}
        rssOne={this.state.rss1}
        rssTwo={this.state.rss2}
        contactOne={this.state.contact1}
        contactTwo={this.state.contact2}

      />
      <Footer newFrame1={this.state.contact1} />
    </div>
    )
  }
}


export default AddressComponent;
