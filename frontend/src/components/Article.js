/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';
import { connect } from 'react-redux';
class Article extends Component {
  constructor(props){
      super(props);
  }
  render(){
      return(
        <a href={"/ProductView?article="+this.props.data.id}>
        <div className ="col-sm-3"  id="Article" key = {this.props.value}onClick={()=>this.printer()}>
                <img id="Articleimg" src="http://cdn.latribuna.hn/wp-content/uploads/2017/04/tomate-2-770x470.jpg"/>
                <center><h2>{this.props.data.name}</h2></center>
                <h4>Precio: ${this.props.data.price}</h4>
        </div>
        </a>
      );
  }
}
const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(Article);