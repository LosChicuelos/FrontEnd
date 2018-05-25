import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/Products.css';
import Header  from './Header';
import Footer  from './Footer';

class Reports extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="container-full" id ="screen">
        <div id ="display">
        <Header value='normal'/>
        <div className="row" >
  		    <div className="col">
            <center>
              <object  height="600" width="900" data={"http://127.0.0.1:3060/articles/user/"+this.props.user.id} type="application/pdf">
              <iframe height="600" width="900" 
                src={"https://docs.google.com/viewer?url=http://127.0.0.1:3060/articles/user/"+this.props.user.id+"&embedded=true"}></iframe>
              </object>
           </center>
          <Footer/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.user
    
});

export default connect(mapStateToProps)(Reports);