import { combineReducers } from 'redux';
import { duck } from './duck.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    alert,
    duck
});

export default rootReducer;