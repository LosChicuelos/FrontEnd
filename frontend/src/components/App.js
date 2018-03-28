import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/App.css';
import Home from './Home';
import Login from './Login';
import Singup from './Singup';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Singup' component={Singup}/>
    </Switch>
  </main>
)

export default App;
