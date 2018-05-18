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
                <center><h2>Venta: {this.props.data.id}</h2></center>
                <center><h2>Cantidad: {this.props.data.quantity}</h2></center>
                <center><h2>{this.props.data.articletemp ? ('Articulo: ' + this.props.data.articletemp.name) : ''}</h2></center>
                <center><h2>{this.props.data.sellertemp ? ('Vendedor: ' + this.props.data.sellertemp.name) : ''}</h2></center>
                <center><h2>{this.props.data.buyertemp  ? ('Comprador:' + this.props.data.buyertemp.name)  : ''}</h2></center>
                <h4>Total: ${this.props.data.amount}</h4>
        </div>
      );
  }
  
}

export default Sale;