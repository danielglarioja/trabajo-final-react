import { combineReducers } from 'redux';
import { restaurantsListReducer } from './restaurantsListReducer';

const initialState = {}

const rootReducer = (state = initialState, action) => {
    return state;    
}

export default combineReducers({
    rootReducer,
    restaurantsListReducer
})