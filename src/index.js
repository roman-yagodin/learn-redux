import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import store from './storeFactory';
import {
  addBookToBasket,
  removeBookFromBasket,
  changeAuthor,
  changePrice,
  changeTitle,
  addBook,
  removeBook
} from './actions/actionCreators';

store.subscribe(() => {
  console.log(JSON.stringify(store.getState(), null, ''));
});

/*
store.dispatch(addBookToBasket(3));
store.dispatch(addBookToBasket(3));
store.dispatch(addBookToBasket(5));
store.dispatch(removeBookFromBasket(3));

store.dispatch(changeAuthor('John Doe'));
store.dispatch(changeTitle('JS за 24 часа'));
store.dispatch(changePrice(350.50));

store.dispatch(addBook({ id: 100, title: "MongoDB. Полное руководство", author: "Брешоу, Йон", price: 2000 }));
store.dispatch(addBook({ id: 101, title: "Профессиональный Typescript", author: "Борис Черный", price: 2000 }));
store.dispatch(removeBook(1));
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
