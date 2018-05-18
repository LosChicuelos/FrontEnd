import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Singup.css';
import Header from './Header';
import FormNewSale from './FormNewSale' 
class NewSale extends Component {
  render() {
    return (
    <div className="container-fluid" id ="screenSingup">
        <div className="row" id ="screenSingup">
  		    <Header value='normal'/>
            <FormNewSale />
        </div>
    </div>
      
    );
  }
}

export default NewSale;