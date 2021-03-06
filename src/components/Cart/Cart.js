import React, { Component } from 'react';
import { cartActions, alertActions } from '../../actions';
import { connect } from 'react-redux';
import { CartDefaultContext } from '../../helpers';
import './Cart.css';
import { Link } from "react-router-dom";

class Cart extends Component {
    constructor(params) {
        super(params);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.props.getCart();
    }
    static contextType = CartDefaultContext; //React context
    /**
     * Lifecycle method. Displays an alert when the component mounts
     */
    componentDidMount() {
        this.props.success("Cart Component Did Mount");
    }
    /**
     * Lifecycle method. Displays an alert when the component unmounts
     */
    componentWillUnmount() {
        this.props.success("Cart Component Will Unmount");
    }
    /**
     * Adds element to cart
     *
     * @param {event} e
     */
    addToCart(e) {
        this.props.addToCart(e.target.value);
    }
    /**
     * Removes element from cart
     * @param {event} e
     */
    removeFromCart(e) {
        this.props.removeFromCart(e.target.value);
    }
    render() {
        console.log(this.props.cartList);
        let cartList = [];
        for (let item in this.props.cartList) {
            cartList.push(this.props.cartList[item]); //Creates an array from the cartList elements to be able to map through it
        }
        let totalPrice = 0;
        return (
            <div id="cart">
                <div style={{marginTop: "50px", marginBottom: "20px"}} className="items"> {/* Css on different components using the style attribute */}
                { cartList.length > 0 && cartList.map((item, index) => /* map on the render */
                    <div className="item" key={index}>
                        <div className="image"><img alt={item.name} width="50px" height="50px" src={"/react-redux-sample-shop/images/" + item.image}></img></div>
                        <div className="name">{item.name}</div>
                        <div className="price">{item.price}<small><sup>€</sup></small></div>
                        <div style={{display: "flex", justifyContent: "end", alignItems: "center"}}className="total"><button style={{marginRight: "0.5em"}} className="remove" value={item.id} onClick={this.removeFromCart}>-</button>{item.total}<button style={{marginLeft: "0.5em"}} value={item.id} onClick={this.addToCart}>+</button></div>
                        <div className="totalPrice">{item.total * item.price}<small><sup>€</sup></small></div>
                        <div style={{display: "none"}}>{totalPrice += item.total * item.price}</div>
                    </div>
                )}
                </div>
                { cartList.length > 0 && (
                    <div style={{marginBottom: "50px"}} className="result">
                        <div style={{marginRight: "20px"}}>Total <span>{totalPrice}<small><sup>€</sup></small></span></div>
                        <Link to="/react-redux-sample-shop/checkout"><button>Checkout</button></Link>
                    </div>
                )}
                {
                    cartList.length <= 0 && <h2 style={{margin: "0 auto"}}>{this.context}</h2> //Context usage for displaying the word empty when there aren't no elements on the cart
                }
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
    getCart: cartActions.get,
    success: alertActions.success
};

const connectedCart = connect(mapState, actionCreators)(Cart)
export default connectedCart;
