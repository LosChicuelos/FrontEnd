/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import Article from './Article.js';
import '../style/ProductsList.css';

class ProductsList extends Component {

  render() {
    return (
        <div className="col" id="ProductsList">
          <br/>
            <center>
              <h1>Productos</h1>
              <br/><br/>
              <Article/>
            </center>
        </div>
    );
  }
}


class Articles extends Component {
    ComponentWillMount(){
    this.setState({
      articles: ['a'],
    })
  }
  render() {
    this.fetchArticles();
    return(
      <div id="Articles"  className="col">
        {this.state.articles.slice().map((info)=>
           <h2>{info}</h2>
        )}
      </div>  
    );
  }
  async fetchArticles(){
    const response = await fetch('http://backend-bsdiaza.c9users.io/articles');
    const status = await response.status;
    if(status === 200){
      this.state.articles = await response.json();
      console.log(this.state.articles);
      console.log('aqui');
    }
  }
}
export default ProductsList;
