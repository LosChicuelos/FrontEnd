/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import swal from 'sweetalert2';
import Home from './Home';
import axios from 'axios';


    const string = /^[a-zA-Z]+$/;
    const number = /^[0-9]+$/;
    const cellphone = /^\d{10}$/;
    const pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class User extends Component {
    infoError = false;
  constructor(props){
      super(props);
  }
    authenticate(data){
        this.validateInput(data.email,email);
  }
     validate(data){

        this.validateInput(data.name,string,"'Nombre'");
        this.validateInput(data.lastname,string,"'Apellido'");
        this.validateInput(data.iddocument,number,"'Identificacion'");
        this.validateInput(data.email,email,"'Correo'");
        this.validateInput(data.phone,cellphone,"'Teléfono'");
        this.validateInput(data.password,string,"'Contraseña'");   
        
        
  }
  
  validateInput(input,list,field){
      if(list.test(input)){
            return true;
        } else {
            this.infoError=true;
            const swal = require('sweetalert2');
                swal({
                  title:'Hay errores en el formulario',
                  text: "Verifique la información ingresada en " + field,
                  type: 'error',
                  confirmButtonText: 'Aceptar'
                })
            return false;
        }
  }


  popUpAddUser (){
    const swal = require('sweetalert2');
    swal({
        type: 'success',
        title: 'Registro Exitoso',
        text: "Le hemos enviado un mensaje de confirmación a su correo electrónico.",
        confirmButtonText: 'Aceptar'

    }).then((result) => {
        if (result.value) {
            window.location.href = '/';
        }
      })
  }

    async addUser(data){
        
            const headers = new Headers();
            headers.append('Content-Type','application/json');
            
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            }
            const request = new Request('http://127.0.0.1:3060/users',options);
            const response = await fetch(request);
            const status = await response.status;
            if(status === 201){
                
                const response = await fetch('http://127.0.0.1:3060/users');
                console.log("respuesta", await response.json());

                axios.get('http://127.0.0.1:3060/sendemail?email='+data.user.email)
                .then(response =>{
                    console.log("respuesta",response);
                })
                
            }
            
    }


        







    async authenticateUser(data){

            const headers = new Headers();
            headers.append('Content-Type','application/json');
            
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            }
            


            const request = new Request("http://127.0.0.1:3060/sessions?email="+data.email+"&password="+data.password,options);
            const response = await fetch(request);
            const status = await response.status;
            if(status === 201){
                return (await response.json());

            } else {
            
                const swal = require('sweetalert2');
                swal({
                    title: 'Error!',
                    text: "La información de registro es errónea. Verifíquela, por favor",
                    type: 'error',
                    confirmButtonText: 'Aceptar'
                })
        }
    }
}

export default User;