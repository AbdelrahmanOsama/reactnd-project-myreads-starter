import React from 'react'
import '../App.css'
import BookSelection from './BookSelection'

class ListView extends React.Component {
  render() {
    const { booksArray,selectionChange } = this.props;
    const books = booksArray.length > 0 || [];
    console.log(books);
    return (
        <div className="bookshelf-books">
                <ol className="books-grid">
            {books.map(book => (
                    <li  key={book.id}>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks !== undefined? book.imageLinks.smallThumbnail : "")})`}}></div>
                            <div className="book-shelf-changer">
                            <BookSelection bookState={book.shelf || 'none'} bookID={book.id} selectionChange={selectionChange}/>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{(book.authors !== undefined? book.authors[0] : "")}</div>
                        </div>
                    </li>
                    ))
                }
                </ol>
      </div>
    )
  }
}

export default ListView
