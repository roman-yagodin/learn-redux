import {
    CHANGE_TITLE,
    CHANGE_AUTHOR,
    CHANGE_PRICE
} from "../actions/actions.js";

export const addBookForm = function(state = {}, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return {...state, title: action.title };
        case CHANGE_AUTHOR:
            return {...state, author: action.author };
        case CHANGE_PRICE:
            return {...state, price: action.price };
        default:
            return state;
    }
}
