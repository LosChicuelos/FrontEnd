import React, { Component } from 'react';
import '../style/ProductInfo.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AddProductInfo extends Component {
  render() {
    return (        
      <div className="col" id="body-Singup" align="center">
        

          <form method="POST" action="https://backend-bsdiaza.c9users.io/articles" >
            <div className="col">
              <br/><h1 className="labe">Nombre</h1>
              <input type="text" name="name" placeholder="Nombre" className="inputText SingupInput"/>
            </div>
            <div className="col">
              <h1 className="labe">Precio</h1>
              <input type="text" name="price" placeholder="Precio" className="inputText SingupInput"/>
            </div>
            <div className="col">
              <h1 className="labe">Inventario</h1>
              <input type="text" name="inventory" placeholder="Inventario" className="inputText SingupInput"/>            
            </div>
            <div className="col">
              <h1 className="labe">Descripción</h1>
              <textarea name="description" placeholder="Descripción" className="inputText SingupInput"></textarea>
            </div>
            <div className="col">
              <h1 className="labe">Foto</h1>
              <input type="file" name="fileToUpload" id="fileToUpload" className="inputText SingupInput"/>
            </div>
            <div className="col">
              
              <button type="submit" className="inputText SingupInput">Send</button>
            </div>
            
          </form>

            
        
    </div>

    
    );
  }
}
export default AddProductInfo;