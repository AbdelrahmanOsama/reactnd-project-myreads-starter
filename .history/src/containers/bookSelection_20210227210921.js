import React from 'react'
import '../App.css'

class BookSelection extends React.Component {
    state = {
        selectedValue:this.props.bookState
    }
    handleChange(e) {
        e.preventDefault()
        console.log(e.target.value )
        this.setState({ selectedValue: e.target.value });
    }
  render() {
      const options = [
            {'label':"Move to...",'value':'move', 'disabled':'disabled'},
            {'label':"Currently Reading",'value':'currentlyReading', 'disabled':'enable'},
            {'label':"Want to Read",'value':'wantToRead', 'disabled':'enable'},
            {'label':"Read",'value':'read', 'disabled':'enable'},
            {'label':"none",'value':'none', 'disabled':'enable'},
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
