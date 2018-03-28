import React, { Component } from 'react';
import '../style/Footer.css';
class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
              <div className="row">
                <ul>
                  <li><label className="white-text" >Bogota, Colombia</label></li>
                  <li><label className="white-text" >@copyright 2018</label></li>
                  <li><label className="white-text" >https://github.com/orgs/LosChicuelos</label></li>
                </ul>
              </div>
            </div>
  	    </footer>
    );
  }
}
export default Footer;
