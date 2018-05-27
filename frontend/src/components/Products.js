import React, { Component } from 'react';
import '../style/Products.css';
import Header from './Header';
import ProductsList from './ProductsList';
import addIcon from '../assets/addIcon.png';
import Footer from './Footer';
class Products extends Component {

  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
        <Header value='normal'/>
          <div className="col" id="bodycontainer">
  		    
            <ProductsList />
            <Footer/>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Products;