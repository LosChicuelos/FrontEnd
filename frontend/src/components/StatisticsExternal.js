import React, { Component } from 'react';
import '../style/Products.css';
import Header  from './Header';
import Footer  from './Footer';
import DateForm from './DateForm';
import InputForm from './InputForm';
import { connect } from 'react-redux';
import * as qs from 'query-string';

class Statistics extends Component {
  
  constructor(props){
    super(props);
    global.param1 = "";
    global.param2 = "";
    global.param3 = "";
    global.param4 = "";
    global.params = "";
    // if (this.props.location.search){
    //   var iframe = document.getElementById('idframe');
    //   console.log(iframe)
    //   this.state = {
    //     urlparam: "http://127.0.0.1:3060/statistics/"+this.props.user.id+this.props.location.search
    //   };
    // } else {
    //   this.state = {
    //     urlparam: "http://127.0.0.1:3060/statistics/"+this.props.user.id
    //   };
    // }
  }
  
  setData(){
    if (this.props.location.search){
      var iframe = document.getElementById('idframe');
      console.log(iframe)
      
      return "http://127.0.0.1:3060/statistics/"+qs.parse(this.props.location.search).id+this.props.location.search
      
    } else {
      
      return "http://127.0.0.1:3060/statistics/"+qs.parse(this.props.location.search).id
      
    }
  }


  setID (){
    console.log("PPPPPPPP", qs.parse(this.props.location.search).id)
    return qs.parse(this.props.location.search).id
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
      this.setState({urlparam: "http://127.0.0.1:3060/statistics/"+qs.parse(this.props.location.search).id+global.params});
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
    
    // if(this.props.user.id===-1){
    //   return(
    //     <div id="Statistics"  className="col">
    //       <h1>Cargando</h1>
    //     </div>
    //   );
    // }
    return (
      <div className="container-full" id ="screen">
        <div id ="display">
        <Header value='normal'/>
        <div className="row" >
          <div className="col" >
          Precio maximo<InputForm   myCallback={this.setParam1} setParams={this.setParams} nombreCampo=""  />
          </div>
          <div className="col" >
          Precio minimo<InputForm   myCallback={this.setParam2} setParams={this.setParams} nombreCampo="" />
          </div>
          <div className="col" >
          Fecha inicio<DateForm myCallback={this.setParam3} setParams={this.setParams} nombreCampo="Fecha inicio"  />
          </div>
          <div className="col" >
          Fecha finalizacion <DateForm myCallback={this.setParam4} setParams={this.setParams} nombreCampo="Fecha finalizacion"  />
          </div>
        </div>
        <div className="row" >
  		    <div className="col" id="Productsbodycontainer2">
            <center>
              <object  height="600" width="900"  data="myfile.pdf" type="application/pdf" 
                data={this.setData()}>
              </object>
           </center>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(Statistics);