import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'


class BookSelection extends React.Component {
    state = {
        selectedValue:this.props.bookState
    }
    handleChange(e) {
        console.log(e)
        e.preventDefault()
        console.log(e.target.value )
        BooksAPI.update(this.props.book,e.target.value)
        .then((books) => {
          console.log(books);
          this.setState(() => ({
            selectedValue: e.target.value 
          }))
        })
    }
  render() {
      const options = [
            {'label':"Move to...",'value':'move', 'disabled':'disabled'},
            {'label':"Currently Reading",'value':'currentlyReading', 'disabled':'enable'},
            {'label':"Want to Read",'value':'wantToRead', 'disabled':'enable','book':this.props.book},
            {'label':"Read",'value':'read', 'disabled':'enable','book':this.props.book},
            {'label':"none",'value':'none', 'disabled':'enable','book':this.props.book},
        ];
    return (
        <select value={this.state.selectedValue} onChange={this.handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        </select>    
    )
  }
}

export default BookSelection
