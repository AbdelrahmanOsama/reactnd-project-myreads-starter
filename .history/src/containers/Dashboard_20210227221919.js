import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import Listview from './ListView'

class Dashboard extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
            books:books
        }))
      })
  }

  changeBookSate = (book,shelf) => {
    // BooksAPI.update(book,shelf)
    // .then((res) => {
    //   console.log(res);
    //   this.setState((currentState) => ({
    //     books: currentState.books.filter((c) => {
    //     return c.id === res
    //   })
    // }))
    // })
    BooksAPI.update(book, shelf).then(response => {
        book.shelf = shelf
        this.setState((state) => ({
          books: this.state.books.filter((b) => b.id !== book.id).concat([ book ])
        }))
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
                  <Listview booksArray={currentlyReading} selectionChange={this.changeBookSate} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <Listview booksArray={wantToRead} selectionChange={this.changeBookSate} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">read</h2>
                  <Listview booksArray={read} selectionChange={this.changeBookSate} />
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
