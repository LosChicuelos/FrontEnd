import React, { Component } from 'react';
import '../style/Products.css';
import Header  from './Header';
import Footer  from './Footer';

class Reports extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="container-full" id ="screen">
        <div id ="display">
        <Header value='normal'/>
        <div className="row" >
  		    <div className="col">
            <center>
              <object  height="600" width="900" data="https://backend-pipemax85.c9users.io/articles/user/3" type="application/pdf">
              <iframe height="600" width="900" 
                src="https://docs.google.com/viewer?url=https://backend-pipemax85.c9users.io/articles/user/3&embedded=true"></iframe>
              </object>
           </center>
          <Footer/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Reports;