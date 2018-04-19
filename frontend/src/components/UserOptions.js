import React, { Component } from 'react';
import '../style/UserOptions.css';
import ProductsLogo from '../assets/ProductsLogo.jpg';
import MapsIcon from '../assets/MapsIcon.jpg';
import AlliesIcon from '../assets/AlliesIcon.png';
import EmailIcon from '../assets/EmailIcon.png';
import BuyerIcon from '../assets/BuyerIcon.png';
class UserOptions extends Component {
  render() {
    return (        
    <div className="col" id="bodycontainer">
    
        <div className="col" id ="OptionsCol">
            <div className="row">
                <a href="/" className ="col-sm-3" id="Option" >
                    <img id="Optionimg" src={ProductsLogo}/>
                    <br/>
                    <center><h2 id="label"> Tus Productos</h2></center>
                </a>
                <a href="/" className ="col-sm-3"  id="Option" >
                    <img id="Optionimg" src={MapsIcon}/>
                    <br/>
                    <center><h2 id="label"> Mapa</h2></center>
                </a>
                <a href="/" className ="col-sm-3"  id="Option">
                    <img id="Optionimg" src={AlliesIcon}/>
                    <br/>
                    <center><h2 id="label"> Aliados</h2></center>
                </a>
            </div>
            <div className="row">
                <a href="/" className ="col-sm-3"  id="Option">
                    <img id="Optionimg" src={EmailIcon}/>
                    <br/>
                    <center><h2 id="label"> Mensajes</h2></center>
                </a>
                <a href="/" className ="col-sm-3"  id="Option">
                    <img id="Optionimg" src={BuyerIcon}/>
                    <br/>
                    <center><h2 id="label"> Posibles Vendedores</h2></center>
                </a>
            </div>
        </div>
    </div>
    );
  }
}
export default UserOptions;