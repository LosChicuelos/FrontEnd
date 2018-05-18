import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';
import { connect } from 'react-redux';
class Message extends Component {
  constructor(props){
      super(props);
  }
  render(){

      if(this.props.user_id!==-1){
        return(
          <div id="Message"  className="col">
            <h1>Cargando</h1>
          </div>
        );
      }
      return(
        <div className ="col-sm-5"  id="Article" key = {this.props.value}>
                <center><h2>{this.props.data.topic}</h2></center>
                <center><h2>{this.props.data.receivertemp?this.props.data.receivertemp.name:''}</h2></center>
                <center><h2>{this.props.data.sendertemp?this.props.data.sendertemp.name:''}</h2></center>
                <h4>Precio: ${this.props.data.content}</h4>
        </div>
        
      );
  }
  
}

const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(Message);