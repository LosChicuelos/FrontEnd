import React, { Component } from 'react';
import '../style/Ubication.css';
import Header from './Header';
import Map from './Map';


export class Ubication extends Component {
  
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
        <Header/>
        <div className="col" >
          <div className="col" id="BodyCol">
          <Map id="lol"/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Ubication;