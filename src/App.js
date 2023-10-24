import logo from './logo.svg';
import './App.css';

import React from 'react';
import Book from "./components/Book.js";
import BookWithoutPrice from "./components/BookWithoutPrice.js";
import Basket from './components/Basket.js';
import AddBookForm from './components/AddBookForm.js';
import SearchForm from './components/SearchForm.js';
import Footer from './components/Footer';
import { Button } from 'reactstrap';

class App extends React.Component{
 
  constructor(props){
    super(props);
    
    this.addBook = this.addBook.bind(this); 
    this.addBasket = this.addBasket.bind(this); 
    this.removeBasket = this.removeBasket.bind(this); 
  }
  
   removeBasket(id){
     
   }  
   addBasket(id){
     
   }
 
  addBook(book){
   
  }
 
  render(){
    const book = this.state.dataBook. map( item => (                         
    item["price"] ?   <Book
    id={item["id"]}
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    handleAddBasket={this.addBasket}
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
      <Basket items={this.state.items} dataBook={this.state.dataBook} handleRemoveBasket={this.removeBasket} />
      <AddBookForm handleAddBook={this.addBook}/>
      <SearchForm />
     {book}
     <Footer />
    </div>;
  }
}

export default App;
