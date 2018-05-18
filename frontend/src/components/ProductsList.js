/*global fetch*/
/*global Headers*/
/*global Request*/
/*global callback*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Article from './Article.js';
import '../style/ProductsList.css';
import addIcon from '../assets/addIcon.png';

const mapStateToProps = state => ({
    user: state.user
    
});


class ProductsList extends Component {
  render() {
    return (
        <div className="col" id="ProductsList">
          <div id="center col-md-12">
            <br/>
              <center>
                <Articles user_id={this.props.user.id} type={this.props.type}/>
              </center>
            </div>
        </div>
    );
  }
}


class Articles extends Component {
  
  bufferArticles(buffertype){
    if(buffertype==='complete'){
      axios.get('https://backend-bsdiaza.c9users.io/articles').then(response => this.setState({articles: response.data, status: response.status}));
    }else{
      axios.get('https://backend-bsdiaza.c9users.io/belongsuser?user_id='+this.props.user_id).then(response => this.setState({articles: response.data, status: response.status}));
}
  }
  constructor(props) {
    super(props);
    this.state = { articles: [],status: 500} ;
  }
  
  render() {
    if(this.state.status===200){
      return(this.renderArticles(this.props.type))
    }else{
      if(this.props.type=='complete'){
         this.bufferArticles('complete');
      }else if(this.props.user_id!==-1){
         this.bufferArticles('user');
      }
      return(
        <div id="Articles"  className="col">
          <h1>Cargando</h1>
        </div>
        );
    
    }
  }
  renderArticles(Articlestype){
    return(
      <div id="Articles"  className="col">
        <h1>Productos</h1>
          <br/><br/>
        {this.state.articles.slice().map((info)=>
           <Article data={info}key={info.id}></Article>
        )}
        <a href="/AddProduct"><Add type={Articlestype}/></a>
      </div>
    );
  }
}
class Add extends Component {
  
  render() {
    if(this.props.type!=='complete'){
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


export default connect(mapStateToProps)(ProductsList);
