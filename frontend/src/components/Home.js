import React, { Component } from 'react';
import '../style/Home.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
  				<div className="row" id="header">
  					<div className = "col"id="logo-col">
  					  <img src="https://www.rawsonservices.com/wp-content/uploads/2014/05/Save-The-Nature.png" className="App-logo" alt="logo" />
    				</div>
    				<div className = "col"id="searchcol">
  	  				<textarea className="form-control" rows="1" cols=" 15"id="searchtext"></textarea>
  	  		    <button className="roundedbutton" id="searchbutton"> </button>
    				</div>
    				<div className = "col-push"id="buttoncol">
    				  <button className="button button1">Ingresar</button> 
  	  				<button className="button button1">Registrarse</button>
    				</div>
          </div>
          <div className="col" id="bodycontainer">
            <div className="col align-self-center" id="carouselcol">
              <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel" data-slide-to="1"></li>
                  <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img className="carouselimg" src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/46/cb/e1/shutterstock-252338818.jpg" alt="anuncio1"/>
                  </div>
                  <div className="item">
                    <img className="carouselimg" src="https://www.bbvafrances.com.ar/fbin/mult/carrousel-agro-convenios_tcm1303-653268.png" alt="anuncio2" />
                  </div>
                  <div className="item">
                    <img className="carouselimg" src="http://www.agronet.gov.co/Noticias/PublishingImages/Bolet%C3%ADn%20Agro.jpg" alt="auncio3" />
                  </div>
                </div>
                <a className="left carousel-control" href="#carousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col" id="body">
              <center><h1>Productos</h1></center>

            </div>
            <footer className="footer">
      	      <div className="container">
      	        <div className="row">
      	          <ul>
      	            <li><label className="white-text" >Bogota, Colombia</label></li>
      	            <li><label className="white-text" >@copyright 2018</label></li>
      	            <li><label className="white-text" >https://github.com/orgs/LosChicuelos</label></li>
      	          </ul>
      	        </div>
      	      </div>
      	    </footer>
          </div> 
        </div>
      </div>
      
    );
  }
}
export default App;