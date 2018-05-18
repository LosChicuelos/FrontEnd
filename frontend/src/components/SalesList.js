import React, { Component } from 'react';
import axios from 'axios';
import Sale from './Sale.js';
import '../style/ProductsList.css';
import addIcon from '../assets/addIcon.png';

class SalesList extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="col" id="ProductsList">
          <br/>
            <center>
              <Sales user_id={this.props.user_id} parametros={this.props.parametros} />
            </center>
        </div>
    );
  }
}


class Sales extends Component {
  componentWillMount(){
    //console.log(this.props);
    if(this.props.user_id===undefined){
      axios.get('https://backend-bsdiaza.c9users.io/sales').then(response => 
      {
        console.log(response.data);
        this.setState({messages: response.data})
      }
      
      );
    }else{
      if(!this.props.parametros.includes("sender_id")){
        axios.get('https://backend-bsdiaza.c9users.io/salesbelongsuser?buyer_id='+this.props.user_id).then(response => 
        {
          console.log(response.data);
          this.setState({messages: response.data})
        }
        );
      } else {
        axios.get('https://backend-bsdiaza.c9users.io/salesbelongsuser?seller_id='+this.props.user_id).then(response => 
        {
          console.log(response.data);
          this.setState({messages: response.data});
        }
        );
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = { messages: []} ;
  }
  
  render() {
    return(
      <div id="Articles"  className="col">
        <h1>Ventas  </h1>
          <br/><br/>
        {this.state.messages.slice().map((info)=>
           <Sale data={info}key={info.id}></Sale>
        )}
        <Add user_id={this.props.user_id}/>
      </div>
    );
  }
  
}

class Add extends Component {
  
  render() {
    if(this.props.user_id!==undefined){
    return(
       <div className ="col-sm-3"  id="Article" key = {this.props.value}>
                <img id="Articleimg" src={addIcon}/>
                  <a href="/NewSale"><center><h2>Nueva venta</h2></center></a>
        </div>
    );}else{
      return null;
    }
  }
  
}
export default SalesList;