import React, { Component } from 'react';
import '../style/Header.css';
class Header extends Component {
  render() {
    return (
        <div className="row" id="header">
          	<div className = "col"id="logo-col">
          	    <img src="https://www.rawsonservices.com/wp-content/uploads/2014/05/Save-The-Nature.png" className="App-logo" alt="logo" />
        	</div>
        	<div className = "col"id="searchcol">
        		<input  type="text" name="Password" className="inputText searchText" id="searchText"/>
                <button className="roundedbutton"  id="searchbutton"> </button>
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
                    <button className="button button1">Ingresar</button> 
                    <button className="button button1">Registrarse</button>
                </div>
            );
        }else{
            return null;
        }
    }
}   
export default Header;

