import { duckConstants } from '../constants';

export function duck(state = {}, action) {
    switch (action.type) {
        case duckConstants.LIST_DUCK_REQUEST:
            return { ...state, getting: true};
        case duckConstants.LIST_DUCK_SUCCESS:
            return {
                ...state,
                getting: false,
                duckList: action.value
            };
        case duckConstants.LIST_DUCK_FAILURE:
            return state;
      default:
        return state
    }
  }