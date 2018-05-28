/*global fetch*/
/*global Headers*/
/*global Request*/
/*global callback*/
import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article.js';
import addIcon from '../assets/addIcon.png';





class SearchList extends Component {
  bufferArticles(){
      axios.get('https://backend-bsdiaza.c9users.io/filter?page_size=30&&name='+this.props.filter.search+"&&min_price="+this.props.filter.min_price+"&&max_price="+this.props.filter.max_price).then(response => this.setState({articles: response.data, status: response.status, search: this.props.filter}));
  }
  constructor(props) {
    super(props);
    this.state = { articles: [],status: 500, search:[]} ;
  }
  
  render() {
    if(this.state.status===200&&this.state.search===this.props.filter){
      return(this.renderArticles())
    }else{
        if(this.props.filterText!==''&&this.state.search!==this.props.filterText){
            this.bufferArticles();
        }
      return(
        <center>
          <div className="loader"></div>
        </center>
        );
    
    }
  }
  renderArticles(){
    return(
      <center><div id="realArticles"  className="col">

        {this.state.articles.slice().map((info)=>
           <Article data={info}key={info.id}></Article>
        )}
      </div></center>
    );
  }
}

export default SearchList;
