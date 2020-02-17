import { cartConstants } from '../constants';

export function cart(state = {}, action) {
    switch (action.type) {
        case cartConstants.GET_CART_REQUEST:
            return { state };
        case cartConstants.GET_CART_SUCCESS:
            console.log(action.value);
            return {
                ...state,
                cartList: action.value
            };
        case cartConstants.GET_CART_FAILURE:
            return state;
      default:
        return state
    }
  }