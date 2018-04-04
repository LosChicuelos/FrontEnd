import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/LoginInfo.css';

class LoginInfo extends Component {
    
  render() {
      
    return (
        <div className="col align-self-center" id="logincol">
            <div className="label" id="usuario">
                <center><h1 className="labe">Usuario</h1></center>
                <center><input  type="text"id="user" name="Usuario" className="inputText"/></center>
            </div>
            <div className="label" id="pass">
                <center><h1 className="labe">Contraseña</h1></center>
                <center><input  type="text" id="pass" name="Contraseña" className="inputText"/></center>
            </div>
            <center><button className="button button1" onClick={()=>this.validateLogin()}>Ingresar</button></center> 
        </div>
    );
  }
       validateLogin(){
        var user = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
        var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        this.validateInput(document.getElementById("user"),user);
        this.validateInput(document.getElementById("pass"),pass);
  }
  
  validateInput(input,list){
      if(list.test(input.value)){
            return true;
        } else {
            alert(input.id+ ' invalido');
            return false;
        }
  }
}

export default LoginInfo;