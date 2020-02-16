import { duckConstants } from '../constants';
import { duckService } from '../services';
import { alertActions } from './';

export const duckActions = {
    list
};

function list() {
    return dispatch => {
        dispatch(request());

        duckService.list()
            .then(
                value => {
                    dispatch(success(value));
                    dispatch(alertActions.success("Duck list received"))
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(value) { return { type: duckConstants.LIST_DUCK_REQUEST, value } }
    function success(value) { return { type: duckConstants.LIST_DUCK_SUCCESS, value } }
    function failure(error) { return { type: duckConstants.LIST_DUCK_FAILURE, error } }
}