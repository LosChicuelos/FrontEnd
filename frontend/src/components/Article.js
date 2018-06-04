/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';
import { connect } from 'react-redux';
// import myimage from "/home/david/Documents/IngeSoftDos/BackEnd/backend/public/system/articles/pictures/000/000/018/thumb/Collage_of_Six_Cats-02.jpg";
class Article extends Component {
  constructor(props){
      super(props);
  }
  render(){
    console.log(this.picUrl())
      return(
        <a href={"/ProductView?article="+this.props.data.id}>
        <div className ="col-sm-3"  id="Article" key = {this.props.value}onClick={()=>this.printer()}>
                <img id="Articleimg" src={this.picUrl()}/>
                <center><h2>{this.props.data.name}</h2></center>
                <h4>Precio: ${this.props.data.price}</h4>
        </div>
        </a>
      );
  }

  picUrl(){

    if (this.props.data.picture_file_name === null){
      return "http://cdn.latribuna.hn/wp-content/uploads/2017/04/tomate-2-770x470.jpg"
    }else{
      try {
        return require('./../pictures/000/000/0'+this.props.data.id+'/medium/'+this.props.data.picture_file_name)}
        catch(err) {return "http://cdn.latribuna.hn/wp-content/uploads/2017/04/tomate-2-770x470.jpg"}
    }


 
    
    
    
    this.props.user.id
  
  }


}


const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(Article);