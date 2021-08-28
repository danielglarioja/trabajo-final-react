import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_OK } from "../actions/usersActions";

const initialState = {
    loading: false,
    users: [],
    error: null
}

export const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case GET_USERS_LOADING:
            return { ...state, loading: true, users: [], error: null };
        case GET_USERS_OK:
            return { ...state, loading: false, users: payload };
        case GET_USERS_ERROR:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
}