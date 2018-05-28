import React, { Component } from 'react';
import '../style/Products.css';
import Header from './Header';
import SalesList from './SalesList';
import Footer from './Footer';
import { connect } from 'react-redux';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = { parametros: this.props.location.search} ;
  }
  render() {
    // if(this.props.user_id===-1){
    //   return(
    //     <div id="Message"  className="col">
    //       <h1>Cargando</h1>
    //     </div>
    //   );
    // }
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  		    <Header value='normal'/>
  		    <div className="col" id="Productsbodycontainer">
            <SalesList user_id={this.props.user_id} parametros={this.state.parametros} />
            <Footer/>
          </div>
        </div>
      </div>
      
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(Sales);