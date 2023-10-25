import logo from './logo.svg';
import './App.css';

import React from 'react';
import Book from "./components/Book.js";
import BookWithoutPrice from "./components/BookWithoutPrice.js";
import Basket from './containers/Basket.js';
import AddBookForm from './containers/AddBookForm.js';
import SearchForm from './components/SearchForm.js';
import Footer from './components/Footer';
import { Button } from 'reactstrap';

class App extends React.Component{
  
  render(){
    const book = this.props.dataBook. map( item => (                         
    item["price"] ?   <Book
    id={item["id"]}
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    /> :
    <BookWithoutPrice
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    />
    )
    )
    return <div>
      <Button color="danger">Danger!</Button>
      <Basket />
      <AddBookForm />
      <SearchForm />
     {book}
     <Footer />
    </div>;
  }
}

export default App;
