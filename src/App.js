import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Nothing from './components/Nothing/Nothing.js';
import Home from './components/Home/Home.js';
import Cart from './components/Cart/Cart.js';
import 'react-toastify/dist/ReactToastify.css';
import { CartDefaultContext } from './helpers';

class App extends Component {
  render() {
    console.log(this.props.duckList);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <CartDefaultContext.Provider value="Empty">
            <Route exact path="/cart" component={Cart}></Route>
          </CartDefaultContext.Provider>
          <Route component={Nothing} />
        </Switch>
      </div>
    );
  }
}

export default App;
