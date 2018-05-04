import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Login.css';
import Header from './Header'
import LoginInfo from './LoginInfo'
class Login extends Component {
  render() {
    return (
    <div className="container-full" id ="screenLogin">
        <div className="row" id ="screenLogin">
  		    <Header value='normal'/>
            <div className="col" id="bodyLogin">
                <LoginInfo />
            </div> 
        </div>
    </div>
      
    );
  }
}

export default Login;