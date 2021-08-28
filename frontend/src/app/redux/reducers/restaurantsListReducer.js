import { DELETE_RESTAURANT, LOAD_RESTAURANTS } from "../actions/restaurantsActions"

const initialState = {
    restaurants: []
}

export const restaurantsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RESTAURANTS:
            return { ...state, restaurants: action.payload }
        case DELETE_RESTAURANT:
            return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant._id !== action.payload) }
        default:
            return state
    }
}