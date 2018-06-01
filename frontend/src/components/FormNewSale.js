/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/General.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class FormNewMessage extends Component {

  
  constructor(props){
    super(props);
    global.usuario = "";
    global.total = "0",
    this.state = {
        usuario: ""
    };
  }
    
  render() {
    return (
            <div className="row" id="body-Message">
                {/* 
                <div className="row" id="row-2">
                    <div className="col ">
                        <center><h1 className="labe">Vendedor</h1></center>
                        <center>
                        <Users myCallback={this.setParam1} />
                        </center>
                    </div>
                </div>
*/}
                <div className="row" id="row-2">
                    <div className="col ">
                        <center><h1 className="labe">Articulos</h1></center>
                        <center>
                        <Articles myCallback={this.setParam2} />
                        </center>
                    </div>
                </div>
                <div className="row" id="row-1">
                    <div className="col ">
                        <center><h1 className="labe">Cantidad</h1></center>
                        <center><input  type="text" ref="asunto" name="asunto" className="inputTextM"/></center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <center><h1 className="labe">Total</h1></center>
                        <center><h1>{global.total}</h1></center>
                    </div>
                </div>
                <div className="col" id="row-2">
                    <center><button className="button button1"onClick={()=>this.verTotal()}>Ver total</button></center>
                </div>
                <div className="col" id="row-2">
                    <center><button className="button button1"onClick={()=>this.validateSingup()}>Enviar</button></center>
                </div>
            </div>
      
    );
  }
    validateSingup(){
        const data = {
            date :  new Date(),
            quantity: this.refs.asunto.value,
            amount: global.total,
            seller_id: 1,
            buyer_id: global.articulo.user_id,
            article_id : global.articulo.id
        }
        console.log(data);
        this.addSale(data);
    }
  
  setParam1(param){
    console.log("usuario "+param);
    global.usuario = param;
  }
  
  verTotal(){
      global.total = Number(this.refs.asunto.value) * global.articulo.price;
      console.log(global.total);
      this.setState({usuario: ""});
  }
  
  setParam2(param){
    console.log("Articulo "+ JSON.stringify(param));
    global.articulo = param;
    if (this.refs.asunto){
        global.total = this.refs.asunto.value * param.price;
        console.log("Total "+global.total);
    }
  }
  
    async addSale(data){
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        const options = {
        method: 'POST',
        headers,
            body: JSON.stringify(data)
        }
        const request = new Request('http://127.0.0.1:3060/sales',options);
        const response = await fetch(request);
        const status = await response.status;
        if(status === 201){
            const response = await fetch('http://127.0.0.1:3060/sales');
            console.log(await response.json());
            window.location.replace("http://localhost:3000/sales");
        }
    }
  
  validateInput(input,list){
      if(list.test(input.value)){
            return true;
        } else {
            alert(input.name+ ' invalido');
            return false;
        }
  }

}

class Articles extends React.Component {
    
    constructor(props){
        super(props);
        axios.get('http://127.0.0.1:3060/articles').then(
        response => {
            const users = response.data;
            console.log(users);
            for (var i = 0; i < users.length; i++){
                var obj = users[i];
                obj.value = obj.id;
                obj.label = obj.name+ " : " + obj.price ;
                obj.price = obj.price;
            }
            console.log(users);
            this.setState({users: response.data});
        });
        this.myCallback = this.props.myCallback.bind(this);
    }
    
  state = {
    selectedOption: '',
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    //console.log('Selected: '+selectedOption.value);
    this.myCallback(selectedOption);
    //console.log(this.state.users);
  }
  
  render() {
  	const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.users}
      />
    );
  }
}

class Users extends React.Component {
    
    constructor(props){
        super(props);
        axios.get('http://127.0.0.1:3060/users').then(
        response => {
            const users = response.data;
            console.log(users);
            for (var i = 0; i < users.length; i++){
                var obj = users[i];
                obj.value = obj.id;
                obj.label = obj.name ;
            }
            console.log(users);
            this.setState({users: response.data});
        });
        this.myCallback = this.props.myCallback.bind(this);
    }
    
  state = {
    selectedOption: '',
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    //console.log('Selected: '+selectedOption.value);
    this.myCallback(selectedOption);
    //console.log(this.state.users);
  }
  
  render() {
  	const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.users}
      />
    );
  }
}


export default FormNewMessage;