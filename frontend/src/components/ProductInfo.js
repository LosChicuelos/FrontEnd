import React, { Component } from 'react';
import axios from 'axios';
import '../style/ProductInfo.css';
class ProductInfo extends Component {
  componentWillMount(){
    axios.get('http://127.0.0.1:3060/articles/'+this.props.article_id).then(response => this.setState({article: response.data, status: response.status}));
    axios.get('http://127.0.0.1:3060/article_score?product='+this.props.article_id).then(response => this.setState({qualification: Math.ceil(response.data*2)/2}));
  }
  componentDidMount(){
    
  }
  constructor(props) {
    super(props)
    this.state = { article: [],
                  status: 500,
                  qualification: 0
    } ;
  }
  
  render() {
    console.log(this.state.qualification);
    return (        
    <div className="col" id="bodycontainer">
        <div className="col" id ="DetailsCol">
            <div className="row">
              <div className="col" id="ProductImageCol">
                <img id="Productimg" src="http://cdn.latribuna.hn/wp-content/uploads/2017/04/tomate-2-770x470.jpg"/>
              </div>
              <div className="col" id="ProductinfoCol">
                <center>
                  <h1 id="productTitle">{this.state.article.name}</h1>
                </center>
                <br/><br/>
                <div className="row">
                  <div className="col">
                    <center>
                      <h2 id="productPrice">Precio </h2>
                      <h2 id="productPrice">${this.state.article.price}</h2>
                    </center>
                  </div>
                  <div className="col">
                    <h2 id="productPrice">Calificación</h2>
                      <fieldset className="rating">
                        <input type="radio" id="star5" name="rating" value="5" checked={this.state.qualification === 5} disabled/><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                        <input type="radio" id="star4half" name="rating" value="4 and a half" checked={this.state.qualification === 4.5}disabled/><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                        <input type="radio" id="star4" name="rating" value="4" checked={this.state.qualification === 4} disabled/><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                        <input type="radio" id="star3half" name="rating" value="3 and a half" checked={this.state.qualification === 3.5}disabled/><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                        <input type="radio" id="star3" name="rating" value="3" checked={this.state.qualification === 3} disabled/><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                        <input type="radio" id="star2half" name="rating" value="2 and a half" checked={this.state.qualification === 2.5} disabled/><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                        <input type="radio" id="star2" name="rating" value="2" checked={this.state.qualification === 2} disabled/><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                        <input type="radio" id="star1half" name="rating" value="1 and a half" checked={this.state.qualification === 1.5}disabled/><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                        <input type="radio" id="star1" name="rating" value="1" checked={this.state.qualification === 1} disabled/><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                        <input type="radio" id="starhalf" name="rating" value="half" checked={this.state.qualification === 0.5} disabled/><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                      </fieldset>
                  </div>
                </div>
                <br/><br/>
                <h2 id="descriptionHeader">Descripción</h2>
                <br/>
                <h3 id="description">{this.state.article.description}</h3>

              </div>
            </div>
            <div className="row">
                
            </div>
        </div>
    </div>
    );
  }

}
export default ProductInfo;