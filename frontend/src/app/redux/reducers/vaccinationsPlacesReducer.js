import { DELETE_PLACE, LOAD_PLACES } from "../actions/placesActions"

const initialState = {
    places: []
}

export const vaccinationsPlacesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PLACES:
            return { ...state, places: action.payload}
        case DELETE_PLACE:
            return { ...state, places: state.places.filter(place => place._id !== action.payload)}
        default:
            return state
    }
}