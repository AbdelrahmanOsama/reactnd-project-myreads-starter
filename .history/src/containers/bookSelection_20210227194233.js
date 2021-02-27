import React from 'react'
import '../App.css'

class bookSelection extends React.Component {
  render() {
    const { booksArray } = this.props;
    console.log(booksArray)
    return (
            <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>      
    )
  }
}

export default bookSelection
