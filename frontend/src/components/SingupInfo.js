/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import swal from 'sweetalert2';
import User from './User';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/SingupInfo.css';
class SignupInfo extends Component {
  render() {
    return (
            <div className="row" id="body-Singup">
                <div className="row" id="row-1">
                    <div className="col ">
                          <center><h1 className="labe">Nombre</h1></center>
                          <center><input  type="text" ref="firstname" name="nombre" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Apellido</h1></center>
                          <center><input  type="text" ref="lastname" name="apellido" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                          <center><h1 className="labe">Identificación</h1></center>
                          <center><input  type="text" ref="id" name="identificacion" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Tipo identificación</h1></center>
                          <center><input  type="text" ref="idtype" name="idtype" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                          <center><h1 className="labe">Correo</h1></center>
                          <center><input  type="text" ref="email" name="correo" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Telefono</h1></center>
                          <center><input  type="text" ref="cellphone" name="telefono" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                          <center><h1 className="labe">Usuario</h1></center>
                          <center><input  type="text" ref="user" name="usuario" className="inputText SingupInput"/></center>
                    </div>
                    <div className="col ">
                          <center><h1 className="labe">Contraseña</h1></center>
                          <center><input  type="text" ref="pass" name="contraseña" className="inputText SingupInput"/></center>
                    </div>
                </div>
                <div className="col" id="row-2">
                    <center><button className="button button1"onClick={()=>this.validateSingup()}>Registrar</button></center>
                </div>
            </div>
      
    );
  }
     validateSingup(){

         const data = {user :{

            typeuser: "ADMINISTRADOR",
            iddocument: this.refs.id.value,
            typedocument: this.refs.idtype.value,
            email: this.refs.email.value,
            phone: this.refs.cellphone.value,
            password: this.refs.pass.value,
            confirm_password: this.refs.pass.value,
            latitude: 2.3456464,
            langitude:1.5654646,
            name: this.refs.firstname.value,
            lastname: this.refs.lastname.value,

        }}
        console.log(user);
        const user = new User();
        user.validate(data.user);
        if(!user.infoError){
            user.addUser(data);
        }
        
        
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