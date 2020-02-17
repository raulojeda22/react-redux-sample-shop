import { cartConstants } from '../constants';
import { cartService } from '../services';
import { alertActions } from './';

export const cartActions = {
    add,
    remove,
    get
};

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