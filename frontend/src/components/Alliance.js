import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';
import { connect } from 'react-redux';

class Alliance extends Component {
  constructor(props){
      super(props);
  }
  render(){
      if(this.props.user_id===-1){
        return(
          <div id="Alliance"  className="col">
            <h1>Cargando</h1>
          </div>
        );
      }
      return(
        <div className ="col-sm-5"  id="Article" key = {this.props.value}>
                <center><h2>{this.props.data.id}</h2></center>
                <center><h2>{this.props.data.commentary.length>100 ?this.props.data.commentary.substring(0,100)+'...':this.props.data.commentary}</h2></center>
                {/*
                <center><h2>{this.props.data.created_at.substring(0,10)}</h2></center>
                <center><h2>Cantidad: {this.props.data.quantity}</h2></center>
                <center><h2>{this.props.data.articletemp ? ('Articulo: ' + this.props.data.articletemp.name) : ''}</h2></center>
                <center><h2>{this.props.data.sellertemp ? ('Vendedor: ' + this.props.data.sellertemp.name) : ''}</h2></center>
                <center><h2>{this.props.data.buyertemp  ? ('Comprador:' + this.props.data.buyertemp.name)  : ''}</h2></center>
                <h4>Total: ${this.props.data.amount}</h4>
                */}
        </div>
      );
  }
  
}

const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(Alliance);