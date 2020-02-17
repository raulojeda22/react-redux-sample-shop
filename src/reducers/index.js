import { combineReducers } from 'redux';
import { duck } from './duck.reducer';
import { alert } from './alert.reducer';
import { cart } from './cart.reducer';

const rootReducer = combineReducers({
    alert,
    duck,
    cart
});

export default rootReducer;