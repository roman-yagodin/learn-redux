import { createStore, combineReducers, legacy_createStore } from 'redux';
import initialState from './initialState';
import { items } from './reducers/items';
import { addBookForm } from './reducers/addBookForm';
import { dataBook } from './reducers/dataBook';

const store = legacy_createStore(combineReducers({
    items,
    addBookForm,
    dataBook
}), initialState);

export default store;
