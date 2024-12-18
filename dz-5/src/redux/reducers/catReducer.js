import { types } from "../types"

const initialState = {
    catImage: '',
    joke: '',
    posts: [],
    titan: []
}

export const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CAT_SUCCESS:
            return { ...state, catImage: action.payload }
        case types.FETCH_JOKE_SUCCESS:
            return {...state, joke: action.payload}
        case types.FETCH_JSON_SUCCESS:
            return { ...state, posts: action.payload };
        case types.FETCH_TITAN_SUCCESS:
            return { ...state, titan: action.payload };
        default: return state
    }
}
