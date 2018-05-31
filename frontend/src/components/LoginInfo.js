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
        tempUser : [],
        
    }

    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }

    handleAuthG () {    
        var provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/plus.login')

        return firebase.auth().signInWithPopup(provider)
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

        return firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    handleLogout () {
        return firebase.auth().signOut()
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
                <button onClick={()=>this.socialNetwork("G")} className="g-button red">
                    {this.state.user ? this.state.user.email : "Accede con Google"}
                </button>           

                <button onClick={()=>this.socialNetwork("F")} className="g-button blue">
                    {this.state.user ? this.state.user.email : "Accede con Facebook"}
                </button>

                {this.props.user.email}
                 <button
                    onClick={this.handleLogout}
                >
                    Logout
                </button>
            </div>


        </div>
    );
  }

    async socialNetwork (Letter){
        if (Letter === "G"){
            await this.handleAuthG()
            
            console.log("intentoooo")
            const aux = await this.isDataBase (await this.state.user.email)
            console.log("aux", aux)
            const Guser = {email: await this.state.user.email, id: {}}
            
            if (aux.rta === true){
                Guser.id = aux.id
                
                this.verifyConfirmation(Guser.id, Guser);
                 
            } else {
                await this.handleLogout()
                const swal = require('sweetalert2');
                swal({
                    title: 'Error!',
                    text: "Sírvase registrarse antes de iniciar sesión",
                    type: 'error',
                    confirmButtonText: 'Aceptar'
                })
            }
        }else{
            await this.handleAuthF()
            const aux = await this.isDataBase (await this.state.user.email)
            const Fuser = {email: await this.state.user.email, id: {}}
            if (aux.rta === true){
                Fuser.id = aux.id                
                this.verifyConfirmation(Fuser.id, Fuser)
                
            } else {
                await this.handleLogout()
                const swal = require('sweetalert2');
                swal({
                    title: 'Error!',
                    text: "Sírvase registrarse antes de iniciar sesión",
                    type: 'error',
                    confirmButtonText: 'Aceptar'
                })
            }

        }
        
    }
    isDataBase (email){

        return fetch('http://127.0.0.1:3060/login?email='+email)
        .then(results => {
            return results.json();
        }).then(response => {
            console.log("response", response)
            return(response)        
        })     
    
    }




    NuserID (data){

        return fetch('http://127.0.0.1:3060/login?email='+data.email)
        .then(results => {
            return results.json();
        }).then(response => {
            console.log("response", response)
            return(response.id)        
        })     
    
    }

    verify (id){

        return fetch('http://127.0.0.1:3060/users/'+id)
        .then(results => {
            return results.json();
        }).then(response => {
            console.log("ID", id)
            console.log("respoooonse", response)
            return(response)        
        })     
    
    }

    

     async authenticateLogin(){
         const data = {
            email: this.refs.email.value,
            password: this.refs.pass.value,
        }
        console.log(data);
        const user = new User();
        user.authenticate(data);
        const nuserID = await this.NuserID(data);
        console.log("ID-------------", user)
        if(!user.infoError){
            const response = await user.authenticateUser(data);
            this.verifyConfirmation(nuserID,response)
            
                        
        }else{
            
                const swal = require('sweetalert2');
                swal({
                    title: 'Error!',
                    text: "La información de registro es errónea. Verifíquela, por favor",
                    type: 'error',
                    confirmButtonText: 'Aceptar'
                })
        }
        
        
        
    }

    async verifyConfirmation(ID, data){

        const nuser = await this.verify(ID);
        if (nuser.confirmation === true){
            this.onLoginUser(data);
            window.location.href = '/UserMenu';
            


        } else {
            await this.handleLogout()
            this.props.onLogoutUser
            const swal = require('sweetalert2');
            swal({
                title: 'Error!',
                text: "Verifique el mensaje de confirmación en su correo",
                type: 'error',
                confirmButtonText: 'Aceptar'
            })
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