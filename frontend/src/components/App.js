import React, { Component } from 'react'
import firebase from 'firebase'
import { Switch, Route } from 'react-router-dom';
import '../style/App.css';
import Home from './Home';
import Login from './Login';
import Singup from './Singup';
import UserMenu from './UserMenu';
import ProductView from './ProductView';
import Products from './Products';
import AddProduct from './AddProduct';
<<<<<<< HEAD


class App extends Component {
  constructor () {
    super();

    this.state = {
      results: {}
    } 
  }



  render (){
    return (
      <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Singup' component={Singup}/>
        <Route exact path='/UserMenu' component={UserMenu}/>
        <Route exact path='/ProductView' component={ProductView}/>
        <Route exact path='/Products' component={Products}/>
        <Route exact path='/AddProduct' component={AddProduct}/>

      </Switch>

    </main>
    
    );
  }
}
=======
import Ubication from'./Ubication';
const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Singup' component={Singup}/>
      <Route exact path='/UserMenu' component={UserMenu}/>
      <Route exact path='/ProductView' component={ProductView}/>
      <Route exact path='/Products' component={Products}/>
      <Route exact path='/AddProduct' component={AddProduct}/>
      
      
      <Route exact path='/Ubication' component={Ubication}/>
    </Switch>
  </main>
)
>>>>>>> f9900511ddc06db1d7c861a34e3d2b04f4ce8b4d

export default App;
