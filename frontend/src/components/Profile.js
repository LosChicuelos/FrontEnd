import React, { Component } from 'react';
import '../style/Home.css';
import Header from './Header';
import BodyHome from './BodyHome'
class Home extends Component {
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  				<Header value='complete'/>
        </div>
      </div>
      
    );
  }
}
export default Home;