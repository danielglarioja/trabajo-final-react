import { combineReducers } from 'redux';
import { restaurantsListReducer } from './restaurantsListReducer';
//import { usersReducer } from './usersReducer';
//import { vaccinationsPlacesReducer } from './vaccinationsPlacesReducer';

const initialState = {}

const rootReducer = (state = initialState, action) => {
    return state;    
}

export default combineReducers({
    rootReducer,
    restaurantsListReducer
   // vaccinationsPlacesReducer
})