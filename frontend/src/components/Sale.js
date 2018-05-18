import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';
class Sale extends Component {
  constructor(props){
      super(props);
  }
  render(){
      return(
        <div className ="col-sm-5"  id="Article" key = {this.props.value}>
                <center><h2>{this.props.data.id}</h2></center>
                <center><h2>{this.props.data.receivertemp?this.props.data.receivertemp.name:''}</h2></center>
                <center><h2>{this.props.data.sendertemp?this.props.data.sendertemp.name:''}</h2></center>
                <h4>Total: ${this.props.data.amount}</h4>
        </div>
      );
  }
  
}

export default Sale;