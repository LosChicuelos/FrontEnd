import React, { Component } from 'react';
import '../style/ProductView.css';
import Header from './Header';
import ProductInfo from './ProductInfo'
class ProductView extends Component {
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  			  <Header value='normal'/>
  			  <ProductInfo/>
        </div>
      </div>
      
    );
  }
}
export default ProductView;