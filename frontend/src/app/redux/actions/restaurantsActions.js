export const LOAD_RESTAURANTS = "LOAD_RESTAURANTS";
export const DELETE_RESTAURANT = "DELETE_RESTAURANT";

const restaurants = [];

//Action generator
export const loadRestaurantsAction = () => ({type: LOAD_RESTAURANTS, payload: restaurants})
export const deleteRestaurantAction = (id) => ({type: DELETE_RESTAURANT, payload: id})
 