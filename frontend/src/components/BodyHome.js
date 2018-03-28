import React, { Component } from 'react';
import '../style/BodyHome.css';
import Carousel from './Carousel';
import Footer from './Footer';
import ProductsList from './ProductsList'
class BodyHome extends Component {
  render() {
    return (
        <div className="col" id="bodycontainer">
            <Carousel />
            <ProductsList />
            <Footer />
        </div>
    );
  }
}
export default BodyHome;
