import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/App.css';
import Home from './Home';
import Login from './Login';
import Singup from './Singup';
import UserMenu from './UserMenu';
import ProductView from './ProductView';
import Products from './Products';
import AddProduct from './AddProduct';
import Ubication from'./Ubication';
import Statistics from './Statistics';
import Reports from './Reports';
import Messages from './Messages';
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
      <Route exact path='/Reports' component={Reports}/>
      <Route exact path='/Statistics' component={Statistics}/>
      <Route exact path='/Messages' component={Messages}/>
      <Route exact path='/Ubication' component={Ubication}/>
    </Switch>
  </main>
)

export default App;
