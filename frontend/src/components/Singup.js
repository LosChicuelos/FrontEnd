import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Singup.css';
import Header from './Header';
import SingupInfo from './SingupInfo' 
class Signup extends Component {
  render() {
    return (
    <div className="container-full" id ="screenSingup">
        <div className="row" id ="screenSingup">
  		    <Header value='normal'/>
            <SingupInfo/>
        </div>
    </div>
      
    );
  }
}

export default Signup;