import React, { Component } from 'react';
import '../style/Products.css';
import Header from './Header';
import SalesList from './SalesList';
import Footer from './Footer';
class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = { parametros: this.props.location.search} ;
  }
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  		    <Header value='normal'/>
  		    <div className="col" id="Productsbodycontainer">
            <SalesList user_id='1' parametros={this.state.parametros} />
            <Footer/>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Sales;