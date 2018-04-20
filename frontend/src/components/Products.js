import React, { Component } from 'react';
import '../style/Products.css';
import Header from './Header';
import ProductsList from './ProductsList';
import addIcon from '../assets/addIcon.png'
class Products extends Component {
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  		    <Header value='normal'/>
  		    <div className="col" id="Productsbodycontainer">
            <ProductsList user_id='1'/>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Products;