import React, { Component } from 'react';
import '../style/Carousel.css';
class Carousel extends Component {
  render() {
    return (
        <div className="col align-self-center" id="carouselcol">
              <div id="carousel" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                  <div className="item active">
                    <img className="carouselimg" src="http://www.smartagro.cl/img/smartagro%20sensores.jpg" alt="anuncio1"/>
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
    );
  }
}
export default Carousel;
