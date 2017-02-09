import React, { Component } from 'react';
import '../index.css';
class Header extends Component {
render(){
  return(
    <div className="jumbotron">
      <a id="header" href="/"><h1>Politication</h1></a>
      <p>Making Political Communication Easier.</p>
   </div>
  )
 }
}
export default Header;
