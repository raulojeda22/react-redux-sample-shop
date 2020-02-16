import { cartConstants } from '../constants';
import { cartService } from '../services';
import { alertActions } from './';

export const cartActions = {
    add
};

function add() {
    return dispatch => {
        dispatch(request());

        cartService.add()
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