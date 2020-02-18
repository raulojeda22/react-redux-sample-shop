import { cartConstants } from '../constants';
import { cartService } from '../services';
import { alertActions } from './';

export const cartActions = {
    add,
    remove,
    get,
    order
};

/**
 * Adds a duck to the cart by Id
 *
 * @param {int} duckId
 */
function add(duckId) {
    return dispatch => {
        dispatch(request(duckId));

        cartService.add(duckId)
            .then(
                value => {
                    dispatch(success(value));
                    dispatch(alertActions.success("Duck added"))
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(value) { return { type: cartConstants.ADD_CART_REQUEST, value } }
    function success(value) { return { type: cartConstants.ADD_CART_SUCCESS, value } }
    function failure(error) { return { type: cartConstants.ADD_CART_FAILURE, error } }
}

/**
 * Removes a duck from the cart by Id
 *
 * @param {int} duckId
 */
function remove(duckId) {
    return dispatch => {
        dispatch(request(duckId));

        cartService.remove(duckId)
            .then(
                value => {
                    dispatch(success(value));
                    dispatch(alertActions.success("Duck removed"))
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(value) { return { type: cartConstants.REMOVE_CART_REQUEST, value } }
    function success(value) { return { type: cartConstants.REMOVE_CART_SUCCESS, value } }
    function failure(error) { return { type: cartConstants.REMOVE_CART_FAILURE, error } }
}

/**
 * Gets the content of the cart
 */
function get() {
    return dispatch => {
        dispatch(request());

        cartService.get()
            .then(
                value => {
                    console.log(value);
                    dispatch(success(value));
                    dispatch(alertActions.success("Cart retrieved"))
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(value) { return { type: cartConstants.GET_CART_REQUEST, value } }
    function success(value) { return { type: cartConstants.GET_CART_SUCCESS, value } }
    function failure(error) { return { type: cartConstants.GET_CART_FAILURE, error } }
}

/**
 * Creates an order with the content of the cart
 *
 * @param {string} name
 * @param {string} address
 * @param {string} cardNumber
 */
function order(name, address, cardNumber) {
    return dispatch => {
        dispatch(request({name, address, cardNumber}));

        cartService.order(name, address, cardNumber)
            .then(
                value => {
                    console.log(value);
                    dispatch(success(value));
                    dispatch(alertActions.success("Ducks ordered"))
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(value) { return { type: cartConstants.ORDER_CART_REQUEST, value } }
    function success(value) { return { type: cartConstants.ORDER_CART_SUCCESS, value } }
    function failure(error) { return { type: cartConstants.ORDER_CART_FAILURE, error } }
}