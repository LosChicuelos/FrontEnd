import React, { Component } from 'react';
import '../style/Home.css';
import Header from './Header';
import UserOptions from './UserOptions.js';
class UserMenu extends Component {
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  			  <Header value='normal'/>
          <UserOptions />
        </div>
      </div>
      
    );
  }
}
export default UserMenu;