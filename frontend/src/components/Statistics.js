import React, { Component } from 'react';
import '../style/Products.css';
import Header  from './Header';
import Footer  from './Footer';
import DateForm from './DateForm';
import InputForm from './InputForm';

class Statistics extends Component {
  
  constructor(props){
    super(props);
    global.param1 = "";
    global.param2 = "";
    global.param3 = "";
    global.param4 = "";
    global.params = "";
    if (this.props.location.search){
      var iframe = document.getElementById('idframe');
      console.log(iframe)
      this.state = {
        urlparam: "https://backend-bsdiaza.c9users.io/articles/user/3"+this.props.location.search
      };
    } else {
      this.state = {
        urlparam: "https://backend-bsdiaza.c9users.io/articles/user/3"
      };
    }
  }
  
  setParams = () =>  {
    if (global.param1 || global.param2 || global.param3 || global.param4){
      global.params = "?";
      if(global.param1){
        global.params += "&max_price=" + global.param1;
      }
      if(global.param2){
        global.params += "&min_price=" + global.param2;
      }
      if(global.param3){
        global.params += "&start_date=" + global.param3;
      }
      if(global.param4){
        global.params += "&ending_date=" + global.param4;
      }
      this.setState({urlparam: "https://backend-bsdiaza.c9users.io/articles/user/3"+global.params});
      //document.getElementById('idframe').contentWindow.postMessage("", '*'); 
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
        <div className="row" >
          <div className="col" >
            <InputForm   myCallback={this.setParam1} setParams={this.setParams} nombreCampo="Precio maximo"  />
          </div>
          <div className="col" >
            <InputForm   myCallback={this.setParam2} setParams={this.setParams} nombreCampo="Precio minimo" />
          </div>
          <div className="col" >
            <DateForm myCallback={this.setParam3} setParams={this.setParams} nombreCampo="Fecha inicio"  />
          </div>
          <div className="col" >
            <DateForm myCallback={this.setParam4} setParams={this.setParams} nombreCampo="Fecha finalizacion"  />
          </div>
        </div>
        <div className="row" >
  		    <div className="col" id="Productsbodycontainer2">
            <center>
              <object  height="600" width="900"  data="myfile.pdf" type="application/pdf" 
                data={this.state.urlparam}>
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

export default Statistics;