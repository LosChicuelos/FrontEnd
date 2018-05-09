import React, { Component } from 'react';
import '../style/Products.css';
import Header from './Header';
import MessagesList from './MessagesList';
import Footer from './Footer';
class Messages extends Component {
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  		    <Header value='normal'/>
  		    <div className="col" id="Productsbodycontainer">
            <MessagesList user_id='1'/>
            <Footer/>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Messages;