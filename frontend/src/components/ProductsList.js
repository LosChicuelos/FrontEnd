/*global fetch*/
/*global Headers*/
/*global Request*/
/*global callback*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Article from './Article.js';
import '../style/ProductsList.css';
import addIcon from '../assets/addIcon.png';

const mapStateToProps = state => ({
    user: state.user,
    rehydrate: state._persist.rehydrated
    
});


class ProductsList extends Component {
  constructor(props){
    super(props)
    this.state={
      pages:[1,2,3,4,5,6],
      selected: 0,
      counter:-1,
      calculated: false
    }
  }
  buffer(){
    if(this.props.type==='complete'){
      axios.get('https://backend-bsdiaza.c9users.io/pages?page_size=15').then(response => this.setState({ counter: response.data}));
    }else{
      axios.get('https://backend-bsdiaza.c9users.io/belongsuserpages?user_id='+this.props.user.id+'&&page_size=20').then(response => this.setState({ counter: response.data}));
  }
  }

  render() {
    if(this.props.rehydrate===false){
      return(
        <div className="col">
          <center>
            <div className="loader"></div>
          </center>
        </div>
        );
    }
    if(this.state.counter===-1){
      this.buffer();
    }
    if(this.state.counter!==-1&&this.state.calculated===false){
      this.calculate_pages();
    }
    return (
        <div className="col" id="ProductsList">
          <br/>
          <center><h1 id="productTitle">Productos</h1></center>
          <br/><br/>
          <div className="row">
            <br/>
                <Articles user_id={this.props.user.id} type={this.props.type} page={this.state.pages[this.state.selected]}/>
            </div>
            
            <center>
            <div className="col"id="pagination">
              <div className="pagination p12">
                <ul>
                  <a  href="#" onClick={()=>this.move_pages(-1)} hidden={this.is_hidden(-1)}><li>Previous</li></a>
                  <a className={this.is_active(0)} href="#" onClick={()=>this.set_active(0)} hidden={this.is_hidden(0)}><li>{this.state.pages[0]}</li></a>
                  <a className={this.is_active(1)} href="#" onClick={()=>this.set_active(1)} hidden={this.is_hidden(1)}><li>{this.state.pages[1]}</li></a>
                  <a className={this.is_active(2)} href="#" onClick={()=>this.set_active(2)} hidden={this.is_hidden(2)}><li>{this.state.pages[2]}</li></a>
                  <a className={this.is_active(3)} href="#" onClick={()=>this.set_active(3)} hidden={this.is_hidden(3)}><li>{this.state.pages[3]}</li></a>
                  <a className={this.is_active(4)} href="#" onClick={()=>this.set_active(4)} hidden={this.is_hidden(4)}><li>{this.state.pages[4]}</li></a>
                  <a className={this.is_active(5)} href="#" onClick={()=>this.set_active(5)} hidden={this.is_hidden(5)}><li>{this.state.pages[5]}</li></a>
                  <a href="#" onClick={()=>this.move_pages(1)} hidden={this.is_hidden(6)}><li>Next</li></a>
                </ul>
              </div>
              </div>
            </center>    
          
        </div>
    );
  }
  
  calculate_pages(){
    var newcounter=Math.ceil(this.state.counter)
    if(newcounter<6){
      var newpages = [];
      for( var i=0; i < this.state.counter; i++){
        newpages[i]=i+1;
      }
      this.setState({pages: newpages});
    }
    this.setState({counter: newcounter, calculated:true});
  }
  is_active(page){
    if(this.state.selected===page){
      return "is-active";
    }else{
      return"";
    }
  }
  set_active(page){
    this.setState({
      selected: page
    })
  }
  move_pages(index){
    
    if(index===-1){
      if(this.state.selected!==0){
        var newselected=this.state.selected-1;
        this.setState({selected: newselected})
      } else if(this.state.pages[0]!==1){
        var newpages = this.state.pages.map(function(element) {
        return element+index;
        });
        this.setState({pages: newpages})
      }
    }else if(index===1){
      if(this.state.selected!==5){
        var newselected=this.state.selected+1;
        this.setState({selected: newselected})
      } else if(this.state.pages[5]!==this.state.counter){
        var newpages = this.state.pages.map(function(element) {
        return element+index;
        });
        this.setState({pages: newpages})
      }
    }
  }
  is_hidden(index){
    if(this.state.counter<=1){
     return true; 
    }else if(this.state.counter<index+1&&index<=5){
      return true;
    }
  }
}


class Articles extends Component {
  
  bufferArticles(buffertype){
    if(buffertype==='complete'){
      axios.get('https://backend-bsdiaza.c9users.io/articles?page_size=15&&page='+this.props.page).then(response => this.setState({articles: response.data, status: response.status,page: this.props.page}));
    }else{
      axios.get('https://backend-bsdiaza.c9users.io/belongsuser?user_id='+this.props.user_id+'&&page_size=12&&page='+this.props.page).then(response => this.setState({articles: response.data, status: response.status,page: this.props.page}));
}
  }
  constructor(props) {
    super(props);
    this.state = { articles: [],status: 500, page:0} ;
  }
  
  render() {
    if(this.state.page!==this.props.page){
      if(this.props.type=='complete'){
           this.bufferArticles('complete');
        }else if(this.props.user_id!==-1){
           this.bufferArticles('user');
        }
      
    }
    if(this.state.status===200){
      return(this.renderArticles(this.props.type))
    }else{
      return(
        <div className="col">
          <center>
            <div className="loader"></div>
          </center>
        </div>
        );
    
    }
  }
  renderArticles(Articlestype){
    return(
      <div id="Articles"  className="col-lg-12">

          <center>
          <div className="col" id ="realArticles">
        {this.state.articles.slice().map((info)=>
           <Article data={info}key={info.id} ></Article>
        )}
        <a href="/AddProduct"><Add type={Articlestype}/></a>
        </div>
        </center>
      </div>
    );
  }
}
class Add extends Component {
  
  render() {
    if(this.props.type!=='complete'){
    return(
      
       <div className ="col-sm-3"  id="Article" key = {this.props.value} >
                <img id="Articleimg" src={addIcon}/>
                <center><h2>Agregar producto</h2></center>
        </div>
    );}else{
      return null;
    }
  }
  conso
}


export default connect(mapStateToProps)(ProductsList);
