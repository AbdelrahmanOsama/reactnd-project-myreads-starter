import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import Listview from './ListView'


class BooksApp extends React.Component {
  state={
    books:[],
    value:''
  }

  search = async val => {
    const res = BooksAPI.search(val);
    const books = await res;
    this.setState({books: books});
  };

  handleChange = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  renderBooks () {
    let showbooks = <h1>There's no books</h1>;
    if (this.state.books.length > 0) {
      showbooks = <Listview booksArray={this.state.books} />;
    }
    return showbooks;
  }
  render() {
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
                           value={value} 
                           onChange={this.handleChange}
                           />
                     {this.renderBooks}
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
