import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/LoginInfo.css';
class LoginInfo extends Component {
  render() {
    return (
        <div className="col align-self-center" id="logincol">
            <div className="label" id="usuario">
                <center><h1 className="labe">Usuario</h1></center>
                <center><input  type="text" name="User" className="inputText" id="userText"/></center>
            </div>
            <div className="label" id="pass">
                <center><h1 className="labe">Contraseña</h1></center>
                <center><input  type="text" name="Password" className="inputText" id="passText"/></center>
            </div>
            <center><button className="button button1">Ingresar</button></center> 
        </div>
    );
  }
}

export default LoginInfo;