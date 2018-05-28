import React, { Component } from 'react';
import '../style/Products.css';
import Header from './Header';
import AlliancesList from './AlliancesList';
import Footer from './Footer';
import { connect } from 'react-redux';

class Alliances extends Component {
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
  		      <a href="/Alliances">
  		      <center><h2>Alianzas hechas </h2></center></a>
  		      <a href="/Alliances?confirmyes=si">
  		      <center><h2>Pendientes por revisar</h2></center></a>
  		      <a href="/Alliances?confirmno=no">
  		      <center><h2>En espera de respuesta</h2></center></a>
            <AlliancesList user_id={this.props.user_id} parametros={this.state.parametros} />
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

export default connect(mapStateToProps)(Alliances);