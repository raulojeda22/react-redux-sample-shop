import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartActions } from '../../actions';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { //Usage of the state for the form
            name: '',
            address: '',
            cardNumber: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const { name, address, cardNumber } = this.state;
        if (name && address && cardNumber) {
            this.props.order(name, address, cardNumber);
            this.props.history.push('/react-redux-sample-shop');
        }
    }
    render() {
        console.log(this.props.history);
        const { name, address, cardNumber, submitted } = this.state;
        return (
            <div id="checkout">
                <h2 style={{textAlign: "center"}}>Checkout</h2>
                <form style={{textAlign: "center"}} onSubmit={this.handleSubmit}> {/* Form on the checkout */}
                    <div className="name">
                        <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange} />
                        {submitted && !name &&
                            <div className="error">Name is required</div>
                        }
                    </div>
                    <div className="address">
                        <input type="text" placeholder="Address" name="address" value={address} onChange={this.handleChange} />
                        {submitted && !address &&
                            <div className="error">Address is required</div>
                        }
                    </div>
                    <div className="cardNumber">
                        <input type="text" placeholder="Card number" name="cardNumber" value={cardNumber} onChange={this.handleChange} />
                        {submitted && !cardNumber &&
                            <div className="error">Card number is required</div>
                        }
                    </div>
                    <button>Buy</button>
                </form>
            </div>
        );
    }
}
function mapState(state) {
    return state;
}

const actionCreators = {
    order: cartActions.order,
};

const connectedCheckout = connect(mapState, actionCreators)(Checkout);
export default connectedCheckout;