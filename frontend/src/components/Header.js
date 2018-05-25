import React, { Component } from 'react';
import '../style/Header.css';
class Header extends Component {
  render() {
    return (
        <div className="row" id="header">
          	<div className = "col"id="logo-col">
          	    <a href="/"><img src="https://www.rawsonservices.com/wp-content/uploads/2014/05/Save-The-Nature.png" className="App-logo" alt="logo" /></a>
        	</div>
        	<div className = "col"id="searchcol">
                <a href="/search"><button className="roundedbutton"  id="searchbutton"> </button></a>
        	</div>
        	<SessionButtons value={this.props.value}/>
        </div>
    );
  }
}

class SessionButtons extends Component {
    render() {
        if (this.props.value==='complete'){
            return (
                <div className = "col-push"id="buttoncol">
                    <a href="/Login"><button className="button button1">Ingresar</button></a>
                    <a href="/Singup"><button className="button button1">Registrarse</button></a>
                </div>
            );
        }else{
            return null;
        }
    }
}   
export default Header;

