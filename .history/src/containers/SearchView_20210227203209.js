import React from 'react'
import * as BooksAPI from './BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state={
    books:[],
    value:''
  }
  handleChange = event => {
    event.preventDefault();
    BooksAPI.search(event.target.value)
    .then((books) => {
        console.log(books)
      this.setState(() => ({
          books:books,
          value: event.target.value
      }))
    })
  };
  render() {
    const { books, value } = this.state
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
                           onChange={(event) => this.handleChange(event.target.value)}
                           />
                    {books.length > 0 ? <Listview booksArray={books} /> : <h2> No Result Found</h2>}
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
