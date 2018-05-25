import React, { Component } from 'react';
import '../style/ProductInfo.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class AddProductInfo extends Component {
  render() {
    // if(this.props.user_id!==-1){
    //   return(
    //     <div id="AddProductInfo"  className="col">
    //       <h1>Cargando</h1>
    //     </div>
    //   );
    // }
    return (        
      <div className="col" id="body-Singup" align="center">
        

          <form method="POST" action="http://127.0.0.1:3060/articles" enctype="multipart/form-data" >
            <div className="col">
              <br/><h1 className="labe">Nombre</h1>
              <input type="text" name="article[name]" placeholder="Nombre" className="inputText SingupInput"/>
            </div>
            <div className="col">
              <h1 className="labe">Precio</h1>
              <input type="text" name="article[price]" placeholder="Precio" className="inputText SingupInput"/>
            </div>
            <div className="col">
              <h1 className="labe">Inventario</h1>
              <input type="text" name="article[inventory]" placeholder="Inventario" className="inputText SingupInput"/>            
            </div>
            <div className="col">
              <h1 className="labe">Descripción</h1>
              <input type="text"name="article[description]" placeholder="Descripción" className="inputText SingupInput"/>
            </div>
            <div className="col">
              <h1 className="labe">id</h1>
              <input type="text"name="article[user_id]" placeholder="Descripción" className="inputText SingupInput"/>
            </div>
            <div className="col">
              <h1 className="labe">cla</h1>
              <input type="text"name="article[classification_id]" placeholder="Descripción" className="inputText SingupInput"/>
            </div>
            <div className="col">
                <h1 className="labe">Foto</h1>
                <input type="file" multiple="multiple" name="article[picture]" id="fileToUpload"/>
            </div>
            <div className="col">
              
              <button type="submit" className="inputText SingupInput">Send</button>
            </div>
            
          </form>

            
        
    </div>

    
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(AddProductInfo);