import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/SingupInfo.css';
class SignupInfo extends Component {
  render() {
    return (
            <div className="row" id="body-Singup">
                <div className="row" id="row-1">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Nombre</h1></center>
                          <center><input  type="text" name="firstname" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Apellido</h1></center>
                          <center><input  type="text" name="lastname" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Identificación</h1></center>
                          <center><input  type="text" name="id" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Tipo identificación</h1></center>
                          <center><input  type="text" name="id-type" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Correo</h1></center>
                          <center><input  type="text" name="mail" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Telefono</h1></center>
                          <center><input  type="text" name="cell" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Usuario</h1></center>
                          <center><input  type="text" name="user" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Contraseña</h1></center>
                          <center><input  type="text" name="password" className="inputText SingupInput"/></center>
                        </form> 
                    </div>
                </div>
                <div className="col" id="row-2">
                    <center><button className="button button1">Registar</button></center>
                </div>
            </div>
      
    );
  }
}

export default SignupInfo;