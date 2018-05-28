import React, { Component } from 'react';
import '../style/Footer.css';
class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
              <div className="row">
                <ul>
                  <h3 className="white-text" >Bogota, Colombia</h3>
                  <h3 className="white-text" >@copyright 2018</h3>
                  <h3 className="white-text" >https://github.com/orgs/LosChicuelos</h3>
                </ul>
              </div>
            </div>
  	    </footer>
    );
  }
}
export default Footer;
