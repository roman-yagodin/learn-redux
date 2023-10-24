import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './storeFactory';
import {
  addBookToBasket,
  removeBookFromBasket,
  changeAuthor,
  changePrice,
  changeTitle,
} from './actions/actionCreators';

store.subscribe(() => {
  console.log(JSON.stringify(store.getState(), null, ''));
});

store.dispatch(addBookToBasket(3));
store.dispatch(addBookToBasket(3));
store.dispatch(addBookToBasket(5));
store.dispatch(removeBookFromBasket(3));

store.dispatch(changeAuthor('John Doe'));
store.dispatch(changeTitle('JS за 24 часа'));
store.dispatch(changePrice(350.50));

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
