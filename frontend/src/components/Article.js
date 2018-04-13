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
        <div className ="col">
            <div className="row">
                <img src="http://cdn.latribuna.hn/wp-content/uploads/2017/04/tomate-2-770x470.jpg"/>
            </div>
            <div className="row">
                <h2>Tomate</h2>
                <p>Precio kg: 2400</p>
            </div>
        </div>
      )
  }
  
}

export default Article;