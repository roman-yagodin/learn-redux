import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './storeFactory';
import {
  ADD_BOOK_TO_BASKET,
  REMOVE_BOOK_FROM_BASKET,
  CHANGE_TITLE,
  CHANGE_AUTHOR,
  CHANGE_PRICE
} from './actions/actions';

store.subscribe(() => {
  console.log(JSON.stringify(store.getState(), null, ''));
});

store.dispatch({type: ADD_BOOK_TO_BASKET, id: 3});
store.dispatch({type: ADD_BOOK_TO_BASKET, id: 3});
store.dispatch({type: ADD_BOOK_TO_BASKET, id: 5});
store.dispatch({type: REMOVE_BOOK_FROM_BASKET, id: 3});

store.dispatch({type: CHANGE_AUTHOR, author: 'John Doe'});
store.dispatch({type: CHANGE_TITLE, title: 'JS за 24 часа'});
store.dispatch({type: CHANGE_PRICE, price: 350.50});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello, world!</h1>
    {/*<App dataBook={dataBook} />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
