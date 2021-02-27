import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'


class BookSelection extends React.Component {
    state = {
        selectedValue:this.props.bookState
    }
    handleChange(e) {
        console.log(this.props.book);
        e.preventDefault()
        console.log(e.target.value)
        BooksAPI.update(this.props.book,e.target.value)
        .then((books) => {
          console.log(books);
          this.setState(() => ({
            selectedValue: e.target.value 
          }))
        })
    }
  render() {
      console.log(this.state.selectedValue);
      const options = [
            {'label':"Move to...",'value':'move', 'disabled':'disabled'},
            {'label':"Currently Reading",'value':'currentlyReading', 'disabled':''},
            {'label':"Want to Read",'value':'wantToRead', 'disabled':''},
            {'label':"Read",'value':'read', 'disabled':''},
            {'label':"none",'value':'none', 'disabled':''},
        ];
    return (
        <select value={this.state.selectedValue} onChange={this.handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>
        ))}
        </select>    
    )
  }
}

export default BookSelection
