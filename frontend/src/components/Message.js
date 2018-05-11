import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';
class Message extends Component {
  constructor(props){
      super(props);
  }
  render(){
      return(
        <div className ="col-sm-3"  id="Article" key = {this.props.value}>
                <center><h2>{this.props.data.topic}</h2></center>
                <h4>Precio: ${this.props.data.content}</h4>
        </div>
      );
  }
  
}

export default Message;