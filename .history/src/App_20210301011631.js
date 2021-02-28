import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Dashboard from './Dashboard'
import SearchView from './SearchView'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  fetchAndUpdateBooks() {
      BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books: books
            }))
        })
  }

  componentDidMount() {
    this.fetchAndUpdateBooks()
  }

  changeBookSate = (bookID,shelf) => {
    BooksAPI.update(bookID,shelf)
    .then((books) => {
      this.fetchAndUpdateBooks()
    })
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() =>(
            <Dashboard books={this.state.books} changeBookShelf={this.changeBookSate} />
          )}
          />
          <Route path='/search' render={() =>(
            <SearchView books={this.state.books} changeBookShelf={this.changeBookSate} />
              )}
          />
      </div>
    )
  }
}

BooksApp.PropTypes ={
    books: PropTypes.array.isRequired,
    changeBookSate: PropTypes.func.isRequired 
}

export default BooksApp
