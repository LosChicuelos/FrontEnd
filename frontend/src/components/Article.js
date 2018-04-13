/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';
class Article extends Component {
  constructor(props){
      super(props);
  }
  render(){
      return(
        <div className ="col-sm-3"  id="Article" key = {this.props.value}>
                <img id="Articleimg" src="http://cdn.latribuna.hn/wp-content/uploads/2017/04/tomate-2-770x470.jpg"/>
                <h2>{this.name} Producto</h2>
                <p>{this.props.precio} Precio</p>
        </div>
      );
  }
  
}

export default Article;