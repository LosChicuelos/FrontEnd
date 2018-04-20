import React, { Component } from 'react';
import '../style/ProductInfo.css';
class ProductInfo extends Component {
  render() {
    return (        
    <div className="col" id="bodycontainer">
        <div className="col" id ="DetailsCol">
            <form method="POST" action="https://backend-pipemax85.c9users.io/users">
               <input type="text" name="name" placeholder="Name">
               <input type="text" name="lastname" placeholder="Lastname">
               <input type="text" name="typeuser" placeholder="Type user">
               <input type="text" name="iddocument" placeholder="Id document">
               <input type="text" name="typedocument" placeholder="Type document">
               <input type="text" name="password" placeholder="password">
               <input type="number" name="latitude" placeholder="password">
               <input type="number" name="longitude" placeholder="password">
               <input type="email" name="email" placeholder="Your email">
               <textarea name="message" placeholder="Your message"></textarea>
               <input type="file" name="fileToUpload" id="fileToUpload">
               <button type="submit">Send</button>
              </form>
        </div>
    </div>
    );
  }
}
export default ProductInfo;