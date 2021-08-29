import { DELETE_RESTAURANT, LOAD_RESTAURANTS } from "../actions/restaurantsActions"

const initialState = {
    restaurants: [{ "_id": { "$oid": "611e71cc021b1a7c527f3144" }, "address": { "building": " 457", "coord": [{ "$numberDouble": "-29.414109311824333" }, { "$numberDouble": "-66.85423014485922" }], "street": "Av. Rivadavia", "zipcode": "f5300" }, "name": "La Vieja Casona", "restaurant_id": "1001", "cuisine": "tradicional", "url": "https://raw.githubusercontent.com/danielglarioja/repoarchivosvarios/master/assed/la%20vieja%20casona-png300x200.png", "telefono": "+543804425996" }, { "_id": { "$oid": "611e76c9021b1a7c527f3145" }, "address": { "building": " 1200", "coord": [{ "$numberDouble": "-29.422406771354968" }, { "$numberDouble": "-66.86089464485896" }], "street": "Av. Juan Domingo Perón ", "zipcode": "f5300" }, "cuisine": "criolla", "name": "La Querencia", "restaurant_id": "1002", "url": "https://raw.githubusercontent.com/danielglarioja/repoarchivosvarios/master/assed/la-querencia_png300x200.png", "telefono": "+543804435214" }, { "_id": { "$oid": "611fcd7d0759d51989ae15b1" }, "address": { "building": " 164", "coord": [{ "$numberDouble": "-29.4146513" }, { "$numberDouble": "-66.8510117" }], "street": "Dorrego ", "zipcode": "f5300" }, "name": "La Stanza", "cuisine": "Gourmet", "url": "https://raw.githubusercontent.com/danielglarioja/repoarchivosvarios/master/assed/la%20stanza_png300x200.png", "telefono": "+543804430809", "restaurant_id": "1003" }]
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