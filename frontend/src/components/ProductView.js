import React, { Component } from 'react';
import queryString from 'query-string';
import '../style/ProductView.css';
import Header from './Header';
import ProductInfo from './ProductInfo'
class ProductView extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  			  <Header value='normal'/>
  			  <ProductInfo article_id={(queryString.parse(this.props.location.search)).article}/>
        </div>
      </div>
      
    );
  }
}
export default ProductView;