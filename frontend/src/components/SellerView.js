import React, { Component } from 'react';
import '../style/Ubication.css';
import Header from './Header';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';


export class SellerView extends Component {
  
  render() {
    // if(this.props.user_id===-1){
    //   return(
    //     <div id="Ubication"  className="col">
    //       <h1>Cargando</h1>
    //     </div>
    //   );
    // }
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
        <Header/>
        <div className="col" >
          
          <ProductsList type="ByUser"/>
          
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(SellerView);