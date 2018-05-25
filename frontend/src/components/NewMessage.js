import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Singup.css';
import Header from './Header';
import FormNewMessage from './FormNewMessage'
import { connect } from 'react-redux'; 
class NewMessage extends Component {
  render() {
    // if(this.props.user_id!==-1){
    //   return(
    //     <div id="NewMessage"  className="col">
    //       <h1>Cargando</h1>
    //     </div>
    //   );
    // }
    return (
    <div className="container-fluid" id ="screenSingup">
        <div className="row" id ="screenSingup">
  		    <Header value='normal'/>
            <FormNewMessage/>
        </div>
    </div>
      
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(NewMessage);