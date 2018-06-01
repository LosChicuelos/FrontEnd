import React, { Component } from 'react';
import axios from 'axios';
import Sale from './Sale.js';
import '../style/ProductsList.css';
import addIcon from '../assets/addIcon.png';
import { connect } from 'react-redux';

class SalesList extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="col" id="ProductsList">
          <br/>
            <center>
              <Sales user_id={this.props.user.id} parametros={this.props.parametros} />
            </center>
        </div>
    );
  }
}


class Sales extends Component {
  Juancho(){
    console.log(this.props)
    /*var str = '[{"id":1,"topic":"Mensaje urgente","content":"Officiis reiciendis consequatur similique aliquid. Dolores deserunt fugit sequi ab tenetur. Fuga consequuntur maiores consequatur molestias. Aperiam dolore sunt quod temporibus quia. Omnis a distinctio.","sender_id":8,"receiver_id":10,"created_at":"2018-04-12T23:31:00.103Z"},{"id":2,"topic":"Mensaje urgente","content":"Quasi ut molestias corporis nesciunt eos. Commodi id ut aut architecto nihil vel. Omnis aspernatur consequatur neque quia officiis harum.","sender_id":1,"receiver_id":4,"created_at":"2018-04-12T23:31:00.118Z"},{"id":3,"topic":"Mensaje urgente","content":"Molestiae cum consequatur non odio ut. Doloribus ducimus aut in eum. Sit eos dolorem autem sed et molestiae nesciunt.","sender_id":3,"receiver_id":3,"created_at":"2018-04-12T23:31:00.136Z"},{"id":4,"topic":"Mensaje urgente","content":"Sit est omnis dolorem illum. Voluptas explicabo et. Placeat eaque deleniti nostrum eum ut. Dolores tenetur voluptas corrupti consequuntur.","sender_id":5,"receiver_id":3,"created_at":"2018-04-12T23:31:00.162Z"},{"id":5,"topic":"Mensaje urgente","content":"Sint occaecati nulla maxime. Blanditiis libero tempora consequatur incidunt aut. Sint in autem esse.","sender_id":3,"receiver_id":1,"created_at":"2018-04-12T23:31:00.178Z"},{"id":6,"topic":"Mensaje urgente","content":"Eos molestias tenetur eaque aut quaerat nihil aspernatur. Tempora repudiandae architecto et. Et nobis facilis. Eveniet omnis aut ut. Ducimus quia nostrum.","sender_id":4,"receiver_id":7,"created_at":"2018-04-12T23:31:00.193Z"}]';
    this.state.messages =   JSON.parse(JSON.stringify(eval("(" + str + ")")));*/
    if(this.props.user_id===undefined){
      axios.get('http://127.0.0.1:3060/sales').then(response => 
      {
        console.log(response.data);
        this.setState({messages: response.data})
      }
      
      );
    }else{
      if(!this.props.parametros.includes("sender_id")){
        axios.get('http://127.0.0.1:3060/salesbelongsuser?buyer_id='+this.props.user_id).then(response => 
        {
          console.log(response.data);
          this.setState({messages: response.data})
        }
        );
      } else {
        axios.get('http://127.0.0.1:3060/sales').then(response => 
        {
          console.log(response.data);
          this.setState({messages: response.data});
        }
        );
      }
    }
  }
  constructor(props) {
    super(props);
    this.state = { messages: []} ;
  }
  
  render() {
    this.Juancho()
    return(
      <div id="Articles"  className="col">
        <h1>Compras-Ventas  </h1>
          <br/><br/>
        {this.state.messages.slice().map((info)=>
           <Sale data={info}key={info.id}></Sale>
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
                  <a href="/NewSale"><center><h2>Nueva venta</h2></center></a>
        </div>
    );}else{
      return null;
    }
  }
  
}
const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(SalesList);