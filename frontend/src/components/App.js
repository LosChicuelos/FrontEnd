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
import Sales from './Sales';
import Alliances from './Alliances';
import NewAlliance from './NewAlliance';
import NewMessage from './NewMessage';
import NewSale from './NewSale';
import Search from './Search';
import Confirmation from './Confirmation';
import BuyerView from './BuyerView';
import SellerView from './SellerView';
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
      <Route exact path='/NewMessage' component={NewMessage}/>
      <Route exact path='/Sales' component={Sales}/>
      <Route exact path='/NewSale' component={NewSale}/>
      <Route exact path='/NewAlliance' component={NewAlliance}/>
      <Route exact path='/Alliances' component={Alliances}/>
      <Route exact path='/Ubication' component={Ubication}/>
      <Route exact path='/Search' component={Search}/>
      <Route exact path='/Confirmation/:confirmationid' component={Confirmation}/>

      <Route exact path='/SellerView' component={SellerView}/>
      <Route exact path='/BuyerView' component={BuyerView}/>
    </Switch>
  </main>
)

export default App;
