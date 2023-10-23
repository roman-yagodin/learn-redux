import logo from './logo.svg';
import './App.css';

import React from 'react';
import Book from "./components/Book.js";
import BookWithoutPrice from "./components/BookWithoutPrice.js";
import Basket from './components/Basket.js';
import AddBookForm from './components/AddBookForm.js';
import SearchForm from './components/SearchForm.js';
import { Button } from 'reactstrap';


import { legacy_createStore, combineReducers  } from 'redux';

function sReducer (state = 0, action) {
  if (action.type == "set/s") {
    return action.value;
  }
  return state;
}

function pReducer (state = 0.0, action) {
  if (action.type == "set/p") {
    return action.value;
  }
  return state;
}

function nReducer (state = 0, action) {
  if (action.type == "set/n") {
    return action.value;
  }
  return state;
}

// пытаемся прочитать начальное начальное состояние из локального хранилища, или создаем новое
const preloadedState = JSON.parse(localStorage.getItem("credit-1")) ?? { s: 3_000_000, p: 12.3, n: 10 };

const store = legacy_createStore(combineReducers({ s: sReducer, p: pReducer, n: nReducer }, preloadedState));

store.subscribe(() => {
  console.log(store.getState());

  // обновление локального хранилища при изменении состояния
  localStorage.setItem("credit-1", JSON.stringify(store.getState()))
});

store.dispatch({ type: "set/s", value: 1_000_000 });
store.dispatch({ type: "set/p", value: 11.5 });
store.dispatch({ type: "set/n", value: 5 });

setTimeout(() => store.dispatch({ type: "set/s", value: 5_000_000 }), 5000);



class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      dataBook: this.props.dataBook,
      items: {}
    };
    this.addBook = this.addBook.bind(this); 
    this.addBasket = this.addBasket.bind(this); 
    this.removeBasket = this.removeBasket.bind(this); 
  }
  
   removeBasket(id){
     let items = Object.assign({},this.state.items);
     delete items[id]; 
     console.log(items);
     this.setState({ items: items});
   }  
   addBasket(id){
     let items = Object.assign({},this.state.items);
     items[id] = (id in items) ? items[id]+1 : 1;
     console.log(items);
     this.setState({ items: items});
   }
 
  addBook(book){
   //alert(JSON.stringify(book))
   
   this.setState( prev =>{
    return {dataBook:prev.dataBook.concat(book)}
   });
   
//    let toAdd = Object.assign({},book);
//    this.setState({
//      dataBook: [...this.state.dataBook, toAdd]
//    }); 

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
    </div>;
  }
}

export default App;
