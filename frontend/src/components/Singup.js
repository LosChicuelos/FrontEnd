import React, { Component } from 'react';
import '../style/Singup.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
    <div className="container-full" id ="screen">
        <div className="row" id ="screen">
  		    <div className="row" id="header">
  			    <div className = "col"id="logo-col">
  				    <img src="https://www.rawsonservices.com/wp-content/uploads/2014/05/Save-The-Nature.png" className="App-logo" alt="logo" />
    			</div>
    			<div className = "col"id="searchcol">
  	  			    <textarea className="form-control" rows="1" cols=" 15"id="searchtext"></textarea>
  	  		        <button className="roundedbutton" id="searchbutton"> </button>
    		    </div>
    		    <div className = "col-push"id="buttoncol">
    		    </div>
            </div>
            <div className="row" id="bodycontainer">
                <div className="row" id="row-1">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Nombre</h1></center>
                          <center><input  type="text" name="firstname" className="inputText"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Apellido</h1></center>
                          <center><input  type="text" name="lastname" className="inputText"/></center>
                        </form> 
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Identificación</h1></center>
                          <center><input  type="text" name="id" className="inputText"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Tipo identifacación</h1></center>
                          <center><input  type="text" name="id-type" className="inputText"/></center>
                        </form> 
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Correo</h1></center>
                          <center><input  type="text" name="mail" className="inputText"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Telefono</h1></center>
                          <center><input  type="text" name="cell" className="inputText"/></center>
                        </form> 
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Usuario</h1></center>
                          <center><input  type="text" name="user" className="inputText"/></center>
                        </form> 
                    </div>
                    <div className="col ">
                        <form action="/action_page.php">
                          <center><h1 className="labe">Contraseña</h1></center>
                          <center><input  type="text" name="password" className="inputText"/></center>
                        </form> 
                    </div>
                </div>
                <div className="col" id="row-2">
                    <center><button className="button button1">Registar</button></center>
                </div>
            </div> 
        </div>
    </div>
      
    );
  }
}

export default App;