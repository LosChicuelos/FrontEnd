import React, { Component } from 'react';
import '../style/ProductView.css';
import Header from './Header';
import AddProductInfo from './AddProductInfo'
class AddProduct extends Component {
  render() {
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
export default AddProduct;