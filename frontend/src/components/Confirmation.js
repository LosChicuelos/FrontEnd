import React, { Component } from 'react';
import '../style/Products.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import * as qs from 'query-string';
import axios from 'axios';
import { database } from 'firebase';

class Confirmation extends Component {

    // constructor(props) {
    //     super(props);
    // }

    constructor() {
        super();
        this.state = {
            user: [],
            redirect: false,           
            
        }
    }
    
    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/Login'/>
        }
    }

    // componentDidMount(){
    //     const parsed = qs.parse(this.props.location.search);
        
    //     fetch('http://127.0.0.1:3060/users/'+parsed.id)
    //     .then(results => {
    //         return results.json();
    //     }).then(data => {
    //         return(
    //             this.setState({user: data})
    //         )        
    //     })     
        
    // }

    componentWillMount(){


        console.log("parsed", this.props.match.params.confirmationid)
        const headers = new Headers();
        headers.append('Content-Type','application/json');

            
            fetch('http://127.0.0.1:3060/confirmation?iduser='+this.props.match.params.confirmationid)
            .then(results => {
                return results.json();
            }).then(data => {
                return(
                    this.setState({user: data})
                    
                )        
            }) 



        // fetch('http://127.0.0.1:3060/confirmation?iduser='+this.props.match.params.confirmationid, {
        //     method: 'GET',
        //     headers
        // })
        // .then(response => response.json())

    }

    // updateUser(){

        
        // const headers = new Headers();
        // headers.append('Content-Type','application/json');

        // const parsed = qs.parse(this.props.location.search);
        // delete data.id;
        // data.confirmation = "true";
        // const lastest = {article : {}};
        // lastest.article = data
        // console.log("state", this.state.user)
        // console.log("lastest", lastest)
        // return fetch('http://127.0.0.1:3060/confirmation?iduser='+parsed.id, {
        //     method: 'GET',
        //     headers
        // })
        // .then(response => response.json())
    // }

    resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 400);
        });
      }

    async redirect(){

        var result = await this.resolveAfter2Seconds();
        this.setRedirect(result)
    }
    
    render() {
        console.log("statrender", this.state.user)
        // this.setRedirect()
        this.redirect(this.state.user)

        const parsed = qs.parse(this.props.location.search);
        
        
        return (
            <div>
                
                
                {this.renderRedirect()}
                
            </div>   
        );
    }









}







export default Confirmation;