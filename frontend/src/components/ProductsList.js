/*global fetch*/
/*global Headers*/
/*global Request*/
/*global callback*/
import React, { Component } from 'react';
import axios from 'axios';
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
              <Articles id="demo"/>
            </center>
        </div>
    );
  }
}


class Articles extends Component {
  componentWillMount(){
    axios.get('http://backend-bsdiaza.c9users.io/articles').then(response => this.setState({articles: response.data}));
  }
  constructor(props) {
    super(props);
    this.state = { articles: []} ;
  }
  
  render() {
    console.log(this.state.articles);
    console.log('holo');
    return(
            <div id="Articles"  className="col">
        {this.state.articles.slice().map((info)=>
           <Article data={info}key={info.id}></Article>
        )}
      </div>
    );
  }
  
}
export default ProductsList;
