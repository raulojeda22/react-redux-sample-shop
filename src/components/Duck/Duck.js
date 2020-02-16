import React, { Component } from 'react';
import './Duck.css';

class Duck extends Component {
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

export default Duck;