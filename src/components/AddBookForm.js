import React from 'react';

export default class AddBookForm extends React.Component{
 
 constructor(props){
     super(props);
     
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
 
  isValidBook(book){
   return book.id && book.title.trim() && book.author.trim() ;
  }
 //https://vk.com/jsspec
  handleSubmit(ev){
   ev.preventDefault();
   
  } 
  
  handleChange(ev){
   ev.preventDefault();

  }
 
  render(){
   return <form action="" onSubmit={this.handleSubmit} className="addbookform">
 <h3>Добавление книги</h3>     
 <div><label>id</label> <input type="text" name="id" onChange={this.handleChange} value={this.state.id} autoComplete="off" /></div>
 <div><label>Название</label> <input type="text" name="title"  onChange={this.handleChange} value={this.state.title} ref={this.setRefInputTitle} autoComplete="off" /></div>
 <div><label>Авторы</label> <input type="text" name="author"  onChange={this.handleChange} value={this.state.author} autoComplete="off"/></div>
 <div><label>Цена</label> <input type="text" name="price"  onChange={this.handleChange} value={this.state.price} autoComplete="off"/></div>
 <div><input type="submit" value="Добавить" className="btn btn-success"/></div>
</form>;

   
  }
}