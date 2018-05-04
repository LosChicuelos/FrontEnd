import React, { Component } from 'react';
import '../style/Products.css';
import Header  from './Header';
import addIcon from '../assets/addIcon.png';
import Footer  from './Footer';
import MyComponent from './MyComponent';

class Statistics extends Component {
  
  constructor(props){
    super(props);
    global.param1 = "";
    global.param2 = "";
    global.param3 = "";
    global.param4 = "";
    global.params = "";
    
    this.state = {
      urlparam: "https://docs.google.com/viewer?url=https://backend-pipemax85.c9users.io/articles/user/3&embedded=true"
    };
  }
  

  
  setParams = () =>  {
    if (global.param1 || global.param2 || global.param3 || global.param4){
      global.params = "?";
      if(global.param1){
        global.params += "max_price=" + global.param1;
      }
      if(global.param2){
        global.params += "min_price=" + global.param2;
      }
      if(global.param3){
        global.params += "start_date=" + global.param3;
      }
      if(global.param4){
        global.params += "ending_date=" + global.param4;
      }
      this.setState({urlparam: "https://docs.google.com/viewer?url=https://backend-pipemax85.c9users.io/articles/user/3"+global.params+"&embedded=true"});
      this.forceUpdate();
      document.getElementById('idframe').contentWindow.postMessage("", '*'); 
      
    }
  }

  setParam1(param){
    global.param1 = param;
  }
  
  setParam2(param){
    global.param2 = param;
  }
  
  setParam3(param){
    global.param3 = param;
  }
  
  setParam4(param){
    global.param4 = param;
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="container-full" id ="screen">
        <div id ="display">
        <Header value='normal'/>
        {/* <h1>{this.state.urlparam}</h1> */}
        <div className="row" >
          <div className="col" >
            <NameForm myCallback={this.setParam1} setParams={this.setParams} nombreCampo="Precio maximo"  />
          </div>
          <div className="col" >
            <NameForm myCallback={this.setParam2} setParams={this.setParams} nombreCampo="Precio minimo" />
          </div>
          <div className="col" >
            <MyComponent />
          </div>
          <div className="col" >
            <MyComponent />
          </div>
        </div>
        <div className="row" >
  		    <div className="col" id="Productsbodycontainer2">
            <center>
              <object  height="600" width="900" data="https://backend-pipemax85.c9users.io/articles/user/3" type="application/pdf">
              <iframe height="600" width="900" id="idframe"
                src={this.state.urlparam}></iframe>
              </object>
           </center>
          <Footer/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.myCallback = this.props.myCallback.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.myCallback(this.state.value);
    this.props.setParams();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.nombreCampo}: {this.state.urlparam}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Statistics;