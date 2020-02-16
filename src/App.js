import React, {Component} from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { duckActions } from './actions';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.list();
  }
  addToCart(e) {
    console.log(e.target.value);
  }
  render() {
    console.log(this.props.duckList);
    return (
      <div>
        { this.props.duckList && this.props.duckList.map((duck, index) =>
          <div key={duck.id}>
            <img width="250px" height="250px" src={"/images/" + duck.image}></img>
            <h4>{duck.name}</h4>
            <h3>{duck.price}<small><sup>€</sup></small></h3>
            <button value={duck.id} onClick={this.addToCart}>Cart</button>
          </div>
        )}
      </div>
    );
  }
}

function mapState(state) {
  const { alert, duck } = state;
  const { list } = duck;
  const { duckList } = state.duck;
  return { alert, list, duckList};
}

const actionCreators = {
  list: duckActions.list,
  //addToCart: cartActions.add
};

const connectedApp = connect(mapState, actionCreators)(App)
export default connectedApp;
