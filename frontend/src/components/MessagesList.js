import React, { Component } from 'react';
import axios from 'axios';
import Message from './Message.js';
import '../style/ProductsList.css';
import addIcon from '../assets/addIcon.png';

class MessagesList extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="col" id="ProductsList">
          <br/>
            <center>
              <Messages user_id={this.props.user_id} parametros={this.props.parametros} />
            </center>
        </div>
    );
  }
}


class Messages extends Component {
  componentWillMount(){
    //console.log(this.props);
    if(this.props.user_id===undefined){
      axios.get('https://backend-bsdiaza.c9users.io/messages').then(response => 
      {
        console.log(response.data);
        this.setState({messages: response.data})
      }
      
      );
    }else{
      if(this.props.parametros.includes("sender_id")){
        axios.get('https://backend-bsdiaza.c9users.io/messagesbelongsuser?sender_id='+this.props.user_id).then(response => 
        {
          console.log(response.data);
          this.setState({messages: response.data})
        }
        );
      } else {
        axios.get('https://backend-bsdiaza.c9users.io/messagesbelongsuser?user_id='+this.props.user_id).then(response => 
        {
          console.log(response.data);
          this.setState({messages: response.data});
        }
        );
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = { messages: []} ;
  }
  
  render() {
    return(
      <div id="Articles"  className="col">
        <h1>Mensajes {this.props.parametros.includes("sender_id")?'enviados':'recibidos'}</h1>
          <br/><br/>
        {this.state.messages.slice().map((info)=>
           <Message data={info}key={info.id}></Message>
        )}
        <Add user_id={this.props.user_id}/>
      </div>
    );
  }
  
}

class Add extends Component {
  
  render() {
    if(this.props.user_id!==undefined){
    return(
       <div className ="col-sm-3"  id="Article" key = {this.props.value}>
                <img id="Articleimg" src={addIcon}/>
                  <a href="/NewMessage"><center><h2>Nuevo mensaje</h2></center></a>
        </div>
    );}else{
      return null;
    }
  }
  
}
export default MessagesList;
