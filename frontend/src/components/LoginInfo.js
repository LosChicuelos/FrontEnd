import React, { Component } from 'react';
import swal from 'sweetalert2';
import User from './User';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/LoginInfo.css';

class LoginInfo extends Component {
    
  render() {
      
    return (
        <div className="col align-self-center" id="logincol">
            <div className="label" id="usuario">
                <center><h1 className="labe">Correo</h1></center>
                <center><input  type="text" ref="email"id="Usuario" name="Usuario" className="inputText"/></center>
            </div>
            <div className="label" id="pass">
                <center><h1 className="labe">Contraseña</h1></center>
                <center><input  type="password" ref="pass"id="Contraseña" name="Contraseña" className="inputText"/></center>
            </div>
            <center><button className="button button1" onClick={()=>this.authenticateLogin()}>Ingresar</button></center> 
        </div>
    );
  }
       authenticateLogin(){
         const data = {
            email: this.refs.email.value,
            password: this.refs.pass.value,
        }
        console.log(data);
        const user = new User();
        user.authenticate(data);
        if(user.infoError){
            user.authenticateUser(data);
        }
        
        
  }
  
}

export default LoginInfo;