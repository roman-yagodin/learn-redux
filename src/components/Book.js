import React from 'react';

export default class Book extends React.Component{
  constructor(props){
     super(props);
     
     this.handleClick   = this.handleClick.bind(this);
     this.addBasketBook = this.addBasketBook.bind(this);
  }
 
  handleClick(ev){
   ev.preventDefault();
   
  }
  
 addBasketBook(ev){
    ev.preventDefault();
    
 } 
 
  render(){
   const price = this.props.price ? <strong>{this.props.price}</strong> : <del>&nbsp;</del>;
    return <div className={"book " + (this.state.selected ? "book-selected" : "book-default") } >
    <h3>{this.props.title}</h3>
    <img src={'http://placehold.it/100x120?text='+this.props.title} alt="" />
    <p> Автор: {this.props.author}</p>
    <p> Цена: {price} руб.</p>
    <a href="#" onClick={this.handleClick} className="btn btn-success">Сравнить</a>&nbsp;
    <a href="#" onClick={this.addBasketBook} className="btn btn-success">В корзину</a>
    </div>;
  }
}
