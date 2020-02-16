import React, {Component} from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { duckActions } from './actions';
import Header from './components/Header/Header';
import DuckList from './components/DuckList/DuckList';
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
        <Header />
        <div id="content">
          <DuckList duckList={this.props.duckList}/>
        </div>
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
