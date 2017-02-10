import React, { Component } from 'react';
import '../index.css';
class Header extends Component {
render(){
  return(
    <div>
      <div className="jumbotron">
        <a id="header" href="/"><h1>Politication</h1></a>
        <p>Making Political Communication Easier.</p>
      </div>
   </div>
  )
 }
}
export default Header;
