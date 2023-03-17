

//action types
export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVORITES = "REMOVE_FAVORITES"

export const addFavorites = (character) => {
    return {type: ADD_FAVORITES, payload: character}
}

export const removeFavorites = (id) => {
    return {type: REMOVE_FAVORITES, payload: id}
}

