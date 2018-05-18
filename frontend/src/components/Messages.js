import React, { Component } from 'react';
import '../style/Products.css';
import Header from './Header';
import MessagesList from './MessagesList';
import Footer from './Footer';
import { connect } from 'react-redux';
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { parametros: this.props.location.search} ;
  }
  render() {
    if(this.props.user_id!==-1){
      return(
        <div id="Messages"  className="col">
          <h1>Cargando</h1>
        </div>
      );
    }
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  		    <Header value='normal'/>
  		    <div className="col" id="Productsbodycontainer">
  		      <a href="/Messages"><center><h2>Recibidos</h2></center></a>
  		      <a href="/Messages?sender_id=1"><center><h2>Enviados</h2></center></a>
            <MessagesList user_id='1' parametros={this.state.parametros} />
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

export default connect(mapStateToProps)(Messages);