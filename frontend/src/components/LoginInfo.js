import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../Actions/UserActions';
import swal from 'sweetalert2';
import User from './User';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/LoginInfo.css';

class LoginInfo extends Component {
    constructor(props){
        super(props);
        this.onLoginUser = this.onLoginUser.bind(this);
    }
    
    onLoginUser(){
        this.props.onLoginUser({email: 'adasdad', token: 'asdasda'});
    }
    
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
            <div onClick={this.onLoginUser}>Login User</div>
            {this.props.user.email}qwe
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
        if(!user.infoError){
            user.authenticateUser(data);

        }
        
        
  }
  
}

const mapStateToProps = state => ({
    user:{  
        email: state.user.email,
        token: state.user.token
    }
    
})
const mapActionsToProps = {
    onLoginUser: loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(LoginInfo);