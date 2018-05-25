/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import swal from 'sweetalert2';
import User from './User';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/General.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class FormNewAlliance extends Component {

  
  constructor(props){
    super(props);
    global.usuario = "";
    this.state = {
        usuario: ""
    };
  }
    
  render() {
    return (
            <div className="row" id="body-Message">
                <div className="row" id="row-2">
                    <div className="col ">
                        <center><h1 className="labe">Usuario</h1></center>
                        <center>
                        <App myCallback={this.setParam1} />
                        </center>
                    </div>
                </div>
                <div className="row" id="row-2">
                    <div className="col ">
                        <center><h1 className="labe">Comentario</h1></center>
                        <center><textarea  type="text" ref="commentary" name="commentary" className="inputTextArea"/></center>
                    </div>
                </div>
                <div className="col" id="row-2">
                    <center><button className="button button1"onClick={()=>this.validateSingup()}>Realizar solicitud de alianza</button></center>
                </div>
            </div>
      
    );
  }
    validateSingup(){
        const data = {
            commentary: this.refs.commentary.value,
            confirm: "PENDIENTE",
            applicant_id: 1,
            approval_id: global.usuario
        }
        console.log(data);
        this.addMessage(data);
    }
  
  setParam1(param){
    console.log("Hola "+param.value);
    global.usuario = param.value;
  }
  
    async addMessage(data){
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        const options = {
        method: 'POST',
        headers,
            body: JSON.stringify(data)
        }
        const request = new Request('https://backend-bsdiaza.c9users.io/alliances',options);
        const response = await fetch(request);
        const status = await response.status;
        if(status === 201){
            const response = await fetch('https://backend-bsdiaza.c9users.io/alliances');
            console.log(await response.json());
            window.location.replace("https://frontend-pipemax85.c9users.io/alliances");
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

class App extends React.Component {
    
    constructor(props){
        super(props);
        axios.get('https://backend-bsdiaza.c9users.io/users').then(
        response => {
            const users = response.data;
            console.log(users);
            for (var i = 0; i < users.length; i++){
                var obj = users[i];
                obj.value = obj.id;
                obj.label = obj.name;
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


export default FormNewAlliance;