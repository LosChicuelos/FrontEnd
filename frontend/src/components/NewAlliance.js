import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Singup.css';
import Header from './Header';
import FormNewAlliance from './FormNewAlliance'
import { connect } from 'react-redux';
class NewAlliance extends Component {
  render() {
    // if(this.props.user_id===-1){
    //   return(
    //     <div id="NewAlliance"  className="col">
    //       <h1>Cargando</h1>
    //     </div>
    //   );
    // }
    return (
      
    <div className="container-fluid" id ="screenSingup">
        <div className="row" id ="screenSingup">
  		    <Header value='normal'/>
            <FormNewAlliance />
        </div>
    </div>
      
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(NewAlliance);