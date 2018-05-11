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
              
              <button type="submit" className="inputText SingupInput">Send</button>
            </div>
            
          </form>

            
        
    </div>

    
    );
  }
}
export default AddProductInfo;