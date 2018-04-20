/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import swal from 'sweetalert2';



    const string = /^[a-zA-Z]+$/;
    const number = /^[0-9]+$/;
    const cellphone = /^\d{10}$/;
    const user = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
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

        this.validateInput(data.name,string);
        this.validateInput(data.lastname,string);
        this.validateInput(data.iddocument,number);
        this.validateInput(data.email,email);
        this.validateInput(data.phone,cellphone);    
        this.validateInput(data.password,pass);
        
        
  }
  
  validateInput(input,list){
      if(list.test(input)){
            return true;
        } else {
            this.infoError=true;
            const swal = require('sweetalert2');
                swal({
                  title: 'Error!',
                  text: 'Do you want to continue',
                  type: 'error',
                  confirmButtonText: 'Cool'
                })
            return false;
        }
  }

    async addUser(data){
        
            const headers = new Headers();
            headers.append('Content-Type','application/json');
            
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            }
            const request = new Request('http://backend-bsdiaza.c9users.io/users',options);
            const response = await fetch(request);
            const status = await response.status;
            if(status === 201){
                const response = await fetch('http://backend-bsdiaza.c9users.io/users');
                console.log(await response.json());
            }
    }
    async authenticateUser(data){
            var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                console.log(this.responseText);
              };
              xhttp.open("POST", "http://backend-bsdiaza.c9users.io/sessions?email="+data.email+"&password="+data.password, true);
              xhttp.send();
              console.log(xhttp.responseText);
              return xhttp.responseText;
    }
}

export default User;