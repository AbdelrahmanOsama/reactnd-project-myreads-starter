import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import GridView from './GridView'

class Dashboard extends React.Component {
  state = {
    books: []
  }

  fetchAndUpdateBooks() {
        BooksAPI.getAll()
          .then((books) => {
              console.log(books)
              this.setState(() => ({
                  books: books
              }))
          })
    }

  componentDidMount() {
    this.fetchAndUpdateBooks()
  }

  changeBookSate = (bookID,shelf) => {
      console.log(bookID)
      console.log(shelf)
    BooksAPI.update(bookID,shelf)
    .then((books) => {
      console.log(books);
      this.fetchAndUpdateBooks()
    })
  }

  render() {
    const currentlyReading = this.state.books.filter(book => (book.shelf === 'currentlyReading'));
    const wantToRead = this.state.books.filter(book => (book.shelf === 'wantToRead'));
    const read = this.state.books.filter(book => (book.shelf === 'read'));

    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <GridView booksArray={currentlyReading} selectionChange={this.changeBookSate} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <GridView booksArray={wantToRead} selectionChange={this.changeBookSate} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">read</h2>
                  <GridView booksArray={read} selectionChange={this.changeBookSate} />
                </div>
              </div>
            </div>
           
            <div className="open-search">
              <Link to='/search'>
                   <button  style={{cursor:'pointer'}}> Add a book </button> 
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default Dashboard
