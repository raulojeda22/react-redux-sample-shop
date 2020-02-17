import React, { Component } from 'react';
import { cartActions } from '../../actions';
import { connect } from 'react-redux';
import { CartDefaultContext } from '../../helpers';
import './Cart.css';

class Cart extends Component {
    constructor(params) {
        super(params);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.props.getCart();
    }
    static contextType = CartDefaultContext;
    addToCart(e) {
        this.props.addToCart(e.target.value);
    }
    removeFromCart(e) {
        this.props.removeFromCart(e.target.value);
    }
    render() {
        console.log(this.props.cartList);
        let cartList = [];
        for (let item in this.props.cartList) {
            cartList.push(this.props.cartList[item]);
        }
        let totalPrice = 0;
        return (
            <div id="cart">
                <div style={{marginTop: "50px", marginBottom: "20px"}} className="items">
                { cartList.length > 0 && cartList.map((item, index) =>
                    <div className="item" key={index}>
                        <div className="image"><img alt={item.name} width="50px" height="50px" src={"/images/" + item.image}></img></div>
                        <div className="name">{item.name}</div>
                        <div className="price">{item.price}<small><sup>€</sup></small></div>
                        <div style={{display: "flex", justifyContent: "end", alignItems: "center"}}className="total"><button style={{marginRight: "0.5em"}} className="remove" value={item.id} onClick={this.removeFromCart}>-</button>{item.total}<button style={{marginLeft: "0.5em"}} value={item.id} onClick={this.addToCart}>+</button></div>
                        <div className="totalPrice">{item.total * item.price}<small><sup>€</sup></small></div>
                        <div style={{display: "none"}}>{totalPrice += item.total * item.price}</div>
                    </div>
                )
                }
                {
                    cartList.length <= 0 && <h2>{this.context}</h2>
                }
                </div>
                <div style={{marginBottom: "50px"}} className="result">
                    <div style={{marginRight: "20px"}}>Total <span>{totalPrice}<small><sup>€</sup></small></span></div>
                    <button>Checkout</button>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { alert, cart } = state;
    const { cartList } = cart;
    return { alert, cartList };
}

const actionCreators = {
    addToCart: cartActions.add,
    removeFromCart: cartActions.remove,
    getCart: cartActions.get
};

const connectedCart = connect(mapState, actionCreators)(Cart)
export default connectedCart;
