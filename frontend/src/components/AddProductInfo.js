import React, { Component } from 'react';
import '../style/ProductInfo.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import axios from 'axios';
import Select from 'react-select';

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
        

          <form method="POST" action="http://127.0.0.1:3060/articles" enctype="multipart/form-data">
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
            
            <input type="hidden" name="article[user_id]" placeholder="Descripción" value={this.props.user_id}/>
            
            <div className="col">
              <h1 className="labe">Clasificación</h1>
             
                        <App myCallback={this.setParam1} />
                        
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

  setParam1(param){
    console.log("Hola "+param.value);
    global.usuario = param.value;
  }
}


class App extends React.Component {
    
  constructor(props){
      super(props);
      axios.get('http://127.0.0.1:3060/classifications').then(
      response => {
          const users = response.data;
          console.log(users);
          for (var i = 0; i < users.length; i++){
              var obj = users[i];
              obj.value = obj.id;
              obj.label = obj.name;
          }
          console.log(users);
          this.setState({users: response.data});
      });
      this.myCallback = this.props.myCallback.bind(this);
  }
  
state = {
  selectedOption: '',
}

handleChange = (selectedOption) => {
  this.setState({ selectedOption });
  //console.log('Selected: '+selectedOption.value);
  this.myCallback(selectedOption);
  //console.log(this.state.users);
}

render() {
  const { selectedOption } = this.state;

  return (
    <Select
      name="form-field-name"
      value={selectedOption}
      onChange={this.handleChange}
      options={this.state.users}
    />
  );
}
}


const mapStateToProps = state => ({
  user: state.user
  
});

export default connect(mapStateToProps)(AddProductInfo);