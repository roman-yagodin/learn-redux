import {
    ADD_BOOK_TO_BASKET,
    REMOVE_BOOK_FROM_BASKET,
    ADD_BOOK,
    REMOVE_BOOK,
    CHANGE_TITLE,
    CHANGE_AUTHOR,
    CHANGE_PRICE,
    CHANGE_SEARCH   
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

export const addBook = (book) => (
  { type: ADD_BOOK, book }
);

export const removeBook = (id) => (
  { type: REMOVE_BOOK, id }
);

export const changeSearch = (value) => (
  { type: CHANGE_SEARCH, value }
);
