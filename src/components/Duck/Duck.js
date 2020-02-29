import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Duck.css';
import { cartActions } from '../../actions';
import PropTypes from 'prop-types';

class Duck extends Component {
    constructor(params) {
        super(params);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(e) {
        this.props.addToCart(e.target.value);
    }
    render() {
        let duck = this.props.duck;
        return (
            <div className="duck" key={duck.id}>
                <div className="image">
                    <img alt={duck.name} width="250px" height="250px" src={"react-redux-sample-shop/images/" + duck.image}></img>
                </div>
                <div className="info">
                    <div className="data">
                        <h4>{duck.name}</h4>
                        <h3>{duck.price}<small><sup>€</sup></small></h3>
                    </div>
                    <div className="actions">
                        <button value={duck.id} onClick={(e) => this.addToCart(e)}>Cart</button> {/* Different types of calls to events */}
                    </div>
                </div>
            </div>
        )
    }
}
/**
 * Default values on properties
 */
Duck.defaultProps = {
    duck: {
        id: 0,
        name: 'Duck',
        image: 'duckyJr.jpeg',
        price: 100
    }
};
/**
 * Restrictions to properties
 */
Duck.propTypes = {
    duck: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
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