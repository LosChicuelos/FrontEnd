/*global fetch*/
/*global Headers*/
/*global Request*/
/*global callback*/
import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article.js';
import '../style/ProductsList.css';
import addIcon from '../assets/addIcon.png';

class ProductsList extends Component {
  render() {
    return (
        <div className="col" id="ProductsList">
          <br/>
            <center>
              <Articles user_id={this.props.user_id}/>
            </center>
        </div>
    );
  }
}


class Articles extends Component {
  componentWillMount(){
    if(this.props.user_id===undefined){
      axios.get('http://backend-bsdiaza.c9users.io/articles').then(response => this.setState({articles: response.data}));
    }else{
      axios.get('https://backend-bsdiaza.c9users.io/belongsuser?user_id='+this.props.user_id).then(response => this.setState({articles: response.data}));
    }
  }
  constructor(props) {
    super(props);
    this.state = { articles: []} ;
  }
  
  render() {
    return(
      <div id="Articles"  className="col">
        <h1>Productos</h1>
          <br/><br/>
        {this.state.articles.slice().map((info)=>
           <Article data={info}key={info.id}></Article>
        )}
        <Add user_id={this.props.user_id}/>
      </div>
    );
  }
  
}
class Add extends Component {
  
  render() {
    if(this.props.user_id!==undefined){
    return(
       <div className ="col-sm-3"  id="Article" key = {this.props.value}>
                <img id="Articleimg" src={addIcon}/>
                <center><h2>Agregar producto</h2></center>
        </div>
    );}else{
      return null;
    }
  }
  
}
export default ProductsList;
