import React, { Component } from 'react';
import { persistStore, autoRehydrate } from 'redux-persist'
import firebase from 'firebase'
import { connect } from 'react-redux';
import { loginUser } from '../Actions/UserActions';
import swal from 'sweetalert2';
import User from './User';
import store from '../index.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/LoginInfo.css';

class LoginInfo extends Component {
    
    constructor (props) {
        super(props);
        this.handleAuthG = this.handleAuthG.bind(this)
        this.handleAuthF = this.handleAuthF.bind(this)
        this.handleAuthT = this.handleAuthT.bind(this)

        this.handleLogout = this.handleLogout.bind(this)
        this.onLoginUser = this.onLoginUser.bind(this);
        this.state = {
          results: {}
        } 
        this.onLoginUser = this.onLoginUser.bind(this);
      }
    onLoginUser(UserInfo){
        console.log(UserInfo);
        this.props.onLoginUser(UserInfo);
        
    }



    state = {
        user: null,
        
    }

    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }

    handleAuthG () {    
        var provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/plus.login')

        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    handleAuthT () {    
        var provider = new firebase.auth.TwitterAuthProvider();
       
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    handleAuthF () {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    handleLogout () {
        firebase.auth().signOut()
        .then(result => console.log('Te has desconectado correctamente'))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
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
            <div >
                <button onClick={this.handleAuthG.bind(this)} className="g-button red">
                    {this.state.user ? this.state.user.email : "Accede con Google"}
                </button>           

                <button onClick={this.handleAuthF.bind(this)} className="g-button blue">
                    {this.state.user ? this.state.user.email : "Accede con Facebook"}
                </button>

                <button onClick={this.handleAuthT.bind(this)} className="g-button green">
                    {this.state.user ? this.state.user.providerData.email : "Accede con Twitter"}
                </button>
                {this.props.user.email}
                 {/* <button
                    onClick={this.handleLogout}
                >
                    Logout
                </button> */}
            </div>


        </div>
    );
  }
     async authenticateLogin(){
         const data = {
            email: this.refs.email.value,
            password: this.refs.pass.value,
        }
        console.log(data);
        const user = new User();
        user.authenticate(data);
        if(!user.infoError){
            const response = await user.authenticateUser(data);
            this.onLoginUser(await response);
            window.location.href = '/UserMenu'; 
    }


        
        
  }
  
}

const mapStateToProps = state => ({
    user: state.user
    
});
const mapActionsToProps = {
    onLoginUser: loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(LoginInfo);