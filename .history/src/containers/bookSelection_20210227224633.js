import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'


class BookSelection extends React.Component {
    state = {
        selectedValue:this.props.bookState,
        bookID:this.props.bookID,
    }

    handleChange(e,bookID) {
        const { value } = e.target;

        BooksAPI.update(bookID,value)
        .then((books) => {
          console.log(books);
          this.setState(() => ({
            selectedValue: value,
          }))
        })
    }

  render() {
      console.log(this.props.bookID)
      const options = [
            {'label':"Move to...",'value':'move', 'disabled':'disabled'},
            {'label':"Currently Reading",'value':'currentlyReading', 'disabled':''},
            {'label':"Want to Read",'value':'wantToRead', 'disabled':''},
            {'label':"Read",'value':'read', 'disabled':''},
            {'label':"none",'value':'none', 'disabled':''},
        ];
    return (
        <select value={this.state.selectedValue} onChange={(e) => this.handleChange(e, this.props.bookID)}>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>
        ))}
        </select>    
    )
  }
}

export default BookSelection
