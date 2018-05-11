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

class ProductsList extends Component {
  render() {
    return (
        <div className="col" id="ProductsList">
          <div id="center col-md-12">
            <br/>
            este es el id: {this.props.user.id}
              <center>
                <Articles user_id={this.props.user.id} type={this.props.type}/>
              </center>
            </div>
        </div>
    );
  }
}


class Articles extends Component {
  componentWillMount(){

    if(this.props.type==='complete'){
      axios.get('https://backend-bsdiaza.c9users.io/articles').then(response => this.setState({articles: response.data}));
    }else{
      axios.get('https://backend-bsdiaza.c9users.io/belongsuser?user_id='+this.props.user_id).then(response => this.setState({articles: response.data}));
      console.log(this.props.user_id);

    }
    /* var str = '[{"id":1,"topic":"Mensaje urgente","content":"Officiis reiciendis consequatur similique aliquid. Dolores deserunt fugit sequi ab tenetur. Fuga consequuntur maiores consequatur molestias. Aperiam dolore sunt quod temporibus quia. Omnis a distinctio.","sender_id":8,"receiver_id":10,"created_at":"2018-04-12T23:31:00.103Z"},{"id":2,"topic":"Mensaje urgente","content":"Quasi ut molestias corporis nesciunt eos. Commodi id ut aut architecto nihil vel. Omnis aspernatur consequatur neque quia officiis harum.","sender_id":1,"receiver_id":4,"created_at":"2018-04-12T23:31:00.118Z"},{"id":3,"topic":"Mensaje urgente","content":"Molestiae cum consequatur non odio ut. Doloribus ducimus aut in eum. Sit eos dolorem autem sed et molestiae nesciunt.","sender_id":3,"receiver_id":3,"created_at":"2018-04-12T23:31:00.136Z"},{"id":4,"topic":"Mensaje urgente","content":"Sit est omnis dolorem illum. Voluptas explicabo et. Placeat eaque deleniti nostrum eum ut. Dolores tenetur voluptas corrupti consequuntur.","sender_id":5,"receiver_id":3,"created_at":"2018-04-12T23:31:00.162Z"},{"id":5,"topic":"Mensaje urgente","content":"Sint occaecati nulla maxime. Blanditiis libero tempora consequatur incidunt aut. Sint in autem esse.","sender_id":3,"receiver_id":1,"created_at":"2018-04-12T23:31:00.178Z"},{"id":6,"topic":"Mensaje urgente","content":"Eos molestias tenetur eaque aut quaerat nihil aspernatur. Tempora repudiandae architecto et. Et nobis facilis. Eveniet omnis aut ut. Ducimus quia nostrum.","sender_id":4,"receiver_id":7,"created_at":"2018-04-12T23:31:00.193Z"}]';
    this.state.messages =   JSON.parse(JSON.stringify(eval("(" + str + ")"))); */
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
        <Add type={this.props.type}/>
      </div>
    );
  }
  
}
class Add extends Component {
  
  render() {
    if(this.props.type===undefined){
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

const mapStateToProps = state => ({
    user: state.user
    
});

export default connect(mapStateToProps)(ProductsList);
