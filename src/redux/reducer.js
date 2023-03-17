import { ADD_FAVORITES, REMOVE_FAVORITES } from "./actions"

const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITES:
            return {...state, myFavorites: [...state.myFavorites, action.payload]};
        
        case REMOVE_FAVORITES:
            return {...state, myFavorites: state.myFavorites.filter((character) => character.id !== action.payload)}    

        default:
            return {...state}
    }
    
}

export default rootReducer