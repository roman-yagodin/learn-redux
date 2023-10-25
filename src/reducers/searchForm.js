import {
    CHANGE_SEARCH
} from "../actions/actions.js";

export const searchForm = function(state = {}, action) {
    switch (action.type) {
        case CHANGE_SEARCH:
            return {...state, value: action.value};
        default:
            return state;
    }
}
