import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../Actions/UserActions';
import home_icon from '../assets/home-icon.png';
import logout_icon from '../assets/logout-icon.png';
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
        	<SessionButtons value={this.props.value} logout={this.props.onLogoutUser} user={this.props.user} rehydrate={this.props.rehydrate}/>
        </div>
    );
  }
}

class SessionButtons extends Component {

    render() {
        if (this.props.user.id===-1&&this.props.rehydrate===true){
            return (
                <div className = "col-push"id="buttoncol">
                    <a href="/Login"><button className="button button1">Ingresar</button></a>
                    <button className="button button1" onClick={()=>this.singup()}>Registrarse</button>
                </div>
            );
        }else{
            return (
                <div className = "col-push"id="buttoncol">
                    <a href="/UserMenu"><img src={home_icon} className="home-logo" alt="logo" /> </a>
                    <a href="/"><img src={logout_icon} className="home-logo" alt="logo" onClick={()=>this.logout()}/> </a>
                </div>
            );
        }
    }
    logout(){
        this.props.logout();
    }
    singup(){
        window.location.replace("/singup");
    }
}  

const mapStateToProps = state => ({
    user: state.user,
    rehydrate: state._persist.rehydrated
    
});
const mapActionsToProps = {
    onLogoutUser: logoutUser
}
export default connect(mapStateToProps,mapActionsToProps)(Header);

