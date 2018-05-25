import React, { Component } from 'react';
import '../style/ProductView.css';
import Header from './Header';
import AddProductInfo from './AddProductInfo'
import { connect } from 'react-redux';
class AddProduct extends Component {
  render() {
    if(this.props.user_id===-1){
      return(
        <div id="AddProduct"  className="col">
          <h1>Cargando</h1>
        </div>
      );
    }
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  			  <Header value='normal'/>
  			  <AddProductInfo/>
        </div>
      </div>
      
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(AddProduct);