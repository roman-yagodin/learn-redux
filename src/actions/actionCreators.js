import {
    ADD_BOOK_TO_BASKET,
    REMOVE_BOOK_FROM_BASKET,
    CHANGE_TITLE,
    CHANGE_AUTHOR,
    CHANGE_PRICE
  } from './actions';

  export const addBookToBasket = (id) => (
    { type: ADD_BOOK_TO_BASKET, id }
  );

  export const removeBookFromBasket = (id) => (
    { type: REMOVE_BOOK_FROM_BASKET, id: id }
  );

  export const changeTitle = (title) => (
    { type: CHANGE_TITLE, title }
  );

  export const changeAuthor = (author) => (
    { type: CHANGE_AUTHOR, author }
  );
  
  export const changePrice = (price) => (
    { type: CHANGE_PRICE, price }
  );
