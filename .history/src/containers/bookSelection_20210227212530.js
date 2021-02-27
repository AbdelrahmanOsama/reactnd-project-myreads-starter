import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'

handleChange(e){
    e.preventDefault()
    console.log(e.target.value)
    BooksAPI.update(props.book,e.target.value)
    .then((books) => {
      console.log(books);
      this.setState(() => ({
        selectedValue: e.target.value 
      }))
    })
}

const BookSelection = props => {
      const options = [
            {'label':"Move to...",'value':'move', 'disabled':'disabled'},
            {'label':"Currently Reading",'value':'currentlyReading', 'disabled':'enable'},
            {'label':"Want to Read",'value':'wantToRead', 'disabled':'enable'},
            {'label':"Read",'value':'read', 'disabled':'enable'},
            {'label':"none",'value':'none', 'disabled':'enable'},
        ];
    return (
        <select value={props.selectedValue} onChange={this.handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        </select>    
    )
  
}

export default BookSelection
