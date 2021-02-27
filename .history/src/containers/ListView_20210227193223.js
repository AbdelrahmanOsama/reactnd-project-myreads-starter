import React from 'react'
import '../App.css'

class ListView extends React.Component {
  render() {
    const { booksArray } = this.props;
    return (
        <div className="bookshelf-books">
            booksArray.map(book => (
                <ol className="books-grid">
                    <li>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.previewLink})` }}></div>
                            <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors[0]}</div>
                        </div>
                    </li>
                </ol>
            ))
    
      </div>
    )
  }
}

export default ListView
