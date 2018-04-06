import React, { Component } from 'react';
import User from './User';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/LoginInfo.css';

class LoginInfo extends Component {
    
  render() {
      
    return (
        <div className="col align-self-center" id="logincol">
            <div className="label" id="usuario">
                <center><h1 className="labe">Usuario</h1></center>
                <center><input  type="text"id="Usuario" name="Usuario" className="inputText"/></center>
            </div>
            <div className="label" id="pass">
                <center><h1 className="labe">Contraseña</h1></center>
                <center><input  type="text" id="Contraseña" name="Contraseña" className="inputText"/></center>
            </div>
            <center><button className="button button1" onClick={()=>this.validateLogin()}>Ingresar</button></center> 
        </div>
    );
  }
       validateLogin(){
        const data = {
            email: this.refs.email.value,
            password: this.refs.pass.value
        };
        console.log(data);
        const user = new User();
        user.athenticate(data);
  }
  
}

export default LoginInfo;