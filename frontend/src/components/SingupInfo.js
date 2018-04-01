import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/SingupInfo.css';
class SignupInfo extends Component {
  render() {
    return (
            <div className="row" id="body-Singup">
                <div className="row" id="row-1">
                    <div className="col ">
                          <center><h1 className="labe">Nombre</h1></center>
                          <center><input  type="text" id="firstname" name="nombre" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Apellido</h1></center>
                          <center><input  type="text" id="lastname" name="apellido" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                          <center><h1 className="labe">Identificación</h1></center>
                          <center><input  type="text" id="id" name="identificacion" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Tipo identificación</h1></center>
                          <center><input  type="text" name="id-type" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                          <center><h1 className="labe">Correo</h1></center>
                          <center><input  type="text" id="email" name="correo" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Telefono</h1></center>
                          <center><input  type="text" id="cellphone" name="telefono" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                          <center><h1 className="labe">Usuario</h1></center>
                          <center><input  type="text" id="user" name="usuario" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Contraseña</h1></center>
                          <center><input  type="text" id="pass" name="contraseña" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="col" id="row-2">
                    <center><button className="button button1"onClick={()=>this.validateSingup()}>Registar</button></center>
                </div>
            </div>
      
    );
  }
     validateSingup(){
        var string = /^[a-zA-Z]+$/;
        var number = /^[0-9]+$/;
        var cellphone = /^\d{10}$/;
        var user = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
        var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.validateInput(document.getElementById("firstname"),string);
        this.validateInput(document.getElementById("lastname"),string);
        this.validateInput(document.getElementById("id"),number);
        this.validateInput(document.getElementById("email"),email);
        this.validateInput(document.getElementById("cellphone"),cellphone);    
        this.validateInput(document.getElementById("user"),user);
        this.validateInput(document.getElementById("pass"),pass);
        
        
  }
  
  validateInput(input,list){
      if(list.test(input.value)){
            return true;
        } else {
            alert(input.name+ ' invalido');
            return false;
        }
  }

}

export default SignupInfo;