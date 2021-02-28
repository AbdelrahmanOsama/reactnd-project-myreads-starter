import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import GridView from './GridView'
import PropTypes from 'prop-types';

const Dashboard = props => {
  // changeBookSate = (bookID,shelf) => {
  //   this.props.changeBookShelf(bookID,shelf)
  // }
    const { books } = props;
    const currentlyReading = books.filter(book => (book.shelf === 'currentlyReading'));
    const wantToRead = books.filter(book => (book.shelf === 'wantToRead'));
    const read = books.filter(book => (book.shelf === 'read'));

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
                  <GridView booksArray={currentlyReading} selectionChange={this.changeBookShelf} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <GridView booksArray={wantToRead} selectionChange={this.changeBookShelf} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">read</h2>
                  <GridView booksArray={read} selectionChange={this.changeBookShelf} />
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

Dashboard.PropTypes ={
  books: PropTypes.array.isRequired,
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  changeBookSate: PropTypes.func.isRequired 
}
export default Dashboard
