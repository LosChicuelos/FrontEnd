import React, { Component } from 'react';
import '../style/Login.css';
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
            <div className="col" id="bodycontainer">
                <div className="col align-self-center" id="logincol">
                    <div className="label" id="usuario">
                        <center><h1 className="labe">Usuario</h1></center>
                        <center><textarea className="form-control inftext" rows="1" cols=" 15"id="usuariotext"></textarea></center>
                    </div>
                    <div className="label" id="pass">
                        <center><h1 className="labe">Contraseña</h1></center>
                        <center><textarea className="form-control inftext" rows="1" cols=" 15"id="passtext"></textarea></center>
                    </div>
                    <center><button className="button button1">Ingresar</button></center> 
                </div>
            </div> 
        </div>
    </div>
      
    );
  }
}

export default App;