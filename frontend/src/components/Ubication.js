import React, { Component } from 'react';
import '../style/Ubication.css';
import Header from './Header';
import Map from './Map';
import { connect } from 'react-redux';


export class Ubication extends Component {
  
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
          <div className="col" id="BodyCol">
          <Map id="lol"/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(Ubication);