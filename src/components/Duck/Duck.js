import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Duck.css';
import { cartActions } from '../../actions';

class Duck extends Component {
    constructor(params) {
        super(params);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(e) {
        console.log(e.target.value);
        console.log(this.props);
        this.props.addToCart(e.target.value);
    }
    render() {
        let duck = this.props.duck;
        return (
            <div className="duck" key={duck.id}>
                <div className="image">
                    <img alt={duck.name} width="250px" height="250px" src={"/images/" + duck.image}></img>
                </div>
                <div className="info">
                    <div className="data">
                        <h4>{duck.name}</h4>
                        <h3>{duck.price}<small><sup>€</sup></small></h3>
                    </div>
                    <div className="actions">
                        <button value={duck.id} onClick={this.addToCart}>Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    addToCart: cartActions.add
};

const connectedDuck = connect(mapState, actionCreators)(Duck)
export default connectedDuck;