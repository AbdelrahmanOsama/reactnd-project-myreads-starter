import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import GridView from './GridView'


class BooksApp extends React.Component {
  state={
    searchedBooks:[],
    value:''
  }

  search = val => {
    BooksAPI.search(val)
    .then((resultBooks) => {
      console.log(resultBooks);
      this.setState(() => ({
        searchedBooks:resultBooks && resultBooks.length > 0 && (resultBooks)
      }))
    })
  };

  handleChange = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  changeBookSate = (bookID,shelf) => {
    console.log(bookID)
    console.log(shelf)
    BooksAPI.update(bookID,shelf)
    .then((books) => {
      console.log(books);
      // this.props.history.goBack();
    })
  }

  render() {
    const {searchedBooks} = this.state;
    const {books} = this.props;
    
    return (
      <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" 
                           placeholder="Search by title or author" 
                           type='text'
                           value={this.state.value} 
                           onChange={this.handleChange}
                           />
                     {this.state.books ? <GridView booksArray={this.state.searchedBooks} selectionChange={this.changeBookSate} /> : <h1>There's no books</h1>}
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
          </div>
       </div>
    )
  }
}

export default BooksApp
