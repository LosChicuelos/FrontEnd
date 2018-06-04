import React, { Component } from 'react';
import '../style/ProductInfo.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import axios from 'axios';
import Select from 'react-select';

class AddProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  popUp() {
    // const objeto = this.state.errors
    // console.log("inicio", objeto)

    var texto = 'Hay errores en el formulario';
    // for (var key in objeto) {
    //   console.log("llave", objeto[key])
    //   texto = texto + objeto[key] + "\n";
    // }
    console.log(texto)
    const swal = require('sweetalert2');
    swal({
      title: 'Error!',
      text: texto,
      type: 'error',
      confirmButtonText: 'Aceptar'
    })
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["nombre"]) {
      formIsValid = false;
      errors["nombre"] = "El campo " + "nombre" + " no puede estar vacío";
      // console.log(errors["nombre"])
    }

    if (typeof fields["nombre"] !== "undefined") {
      if (!fields["nombre"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["nombre"] = "El campo " + "nombre" + " solo puede contener letras";
        // console.log(errors["nombre"])
      }
    }
    //Precio
    if (!fields["precio"]) {
      formIsValid = false;
      errors["precio"] = "El campo precio no puede estar vacío";
      // console.log("precio", errors["precio"])
    }

    if (typeof fields["precio"] !== "undefined") {
      if (!fields["precio"].match(/^([+-]?[1-9]\d*|0)$/)) {
        formIsValid = false;
        errors["precio"] = "El campo precio debe ser un número";
      }
    }
    //Inventario
    if (!fields["inventario"]) {
      formIsValid = false;
      errors["inventario"] = "El campo inventario no puede estar vacío";
      // console.log("inventario", errors["inventario"])
    }

    if (typeof fields["inventario"] !== "undefined") {
      if (!fields["inventario"].match(/^([+-]?[1-9]\d*|0)$/)) {
        formIsValid = false;
        errors["inventario"] = "El campo inventario debe ser un número";
      }
    }
    //Descripción
    if (!fields["descripcion"]) {
      formIsValid = false;
      errors["descripcion"] = "El campo descripción no puede estar vacío";
      // console.log("descripcion", errors["descripcion"])
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log("elementos", e)
    if (this.handleValidation()) {
      fetch('http://127.0.0.1:3060/articles', {
        method: 'POST',
        body: data,
      });
      const swal = require('sweetalert2');
      swal({
        title: 'Nuevo artículo agregado',
        text: "",
        type: 'success',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.value) {
          window.location.replace("/Products");
        }
      })

      
      return true
    } else {
      this.popUp()
      return false
    }

  }



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


        <form name="Formulario" onSubmit={this.contactSubmit.bind(this)} enctype="multipart/form-data">
          <div className="col">
            <br /><h1 className="labe">Nombre</h1>
            <input
              onChange={this.handleChange.bind(this, "nombre")}
              errorText={this.state.nombreError}
              value={this.state.fields["nombre"]}
              type="text"
              name="article[name]"
              placeholder="Nombre"
              className="inputText SingupInput"
            />
          </div>
          <div className="col">
            <h1 className="labe">Precio</h1>
            <input
              onChange={this.handleChange.bind(this, "precio")}
              errorText={this.state.precioError}
              value={this.state.fields["precio"]}
              type="text"
              name="article[price]"
              placeholder="Precio"
              className="inputText SingupInput"
            />
          </div>
          <div className="col">
            <h1 className="labe">Inventario</h1>
            <input
              onChange={this.handleChange.bind(this, "inventario")}
              errorText={this.state.inventarioError}
              value={this.state.fields["inventario"]}
              type="text"
              name="article[inventory]"
              placeholder="Inventario"
              className="inputText SingupInput"
            />
          </div>
          <div className="col">
            <h1 className="labe">Descripción</h1>
            <input
              onChange={this.handleChange.bind(this, "descripcion")}
              errorText={this.state.descripcionError}
              value={this.state.fields["descripcion"]}
              type="text"
              name="article[description]"
              placeholder="Descripción"
              className="inputText SingupInput"
            />
          </div>

          <input
            type="hidden"
            name="article[user_id]"
            placeholder="id"
            value={this.props.user.id}
          />

          <div className="col">
            <h1 className="labe">Clasificación</h1>
            <App myCallback={this.setParam1} />
          </div>

          <div className="col">
            <h1 className="labe">Foto</h1>
            <input
              type="file"
              multiple="multiple"
              name="article[picture]"
              id="fileToUpload"
            />
          </div>

          <div className="col">
            <button type="submit"
              className="inputText SingupInput"
            // onClick={()=>window.open('/Products')}
            >
              Send
            </button>
          </div>

        </form>
      </div>

    );
  }

  setParam1(param) {
    console.log("Hola " + param.value);
    global.usuario = param.value;
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    axios.get('http://127.0.0.1:3060/classifications').then(
      response => {
        const users = response.data;
        console.log(users);
        for (var i = 0; i < users.length; i++) {
          var obj = users[i];
          obj.value = obj.id;
          obj.label = obj.name;
        }
        console.log(users);
        this.setState({ users: response.data });
      });
    this.myCallback = this.props.myCallback.bind(this);
  }

  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log("tipo", typeof selectedOption.id, selectedOption)
    //console.log('Selected: '+selectedOption.value);
    this.myCallback(selectedOption);
    //console.log(this.state.users);
  }

  render() {
    const { selectedOption } = this.state;
    console.log("lotuyo", selectedOption)


    return (
      <Select
        name={"article[classification_id]"}
        value={selectedOption.id}
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