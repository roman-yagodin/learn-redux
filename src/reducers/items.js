import {
    ADD_BOOK_TO_BASKET,
    REMOVE_BOOK_FROM_BASKET
} from "../actions/actions.js";

export const items = function(state = {}, action) {
    let newState = Object.assign(state);
    switch (action.type) {
        case ADD_BOOK_TO_BASKET:
            if (!(action.id in newState)) {
                newState[action.id] = 0;
            }
            newState[action.id]++;
            return newState;
    
        case REMOVE_BOOK_FROM_BASKET:
            newState = {};
            for (let i in state) {
                if (i != action.id) {
                    newState[i] = state[i];
                }
            }
            return newState;

        default:
            return state;
    }
}
