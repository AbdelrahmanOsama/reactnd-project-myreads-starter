import React from 'react'
import '../App.css'


class BookSelection extends React.Component {
    state = {
        selectedValue:this.props.bookState,
        bookID:this.props.bookID,
    }

    handleChange(e,bookID) {
        const { value } = e.target;
        this.props.selectionChange(bookID,value);
    }

  render() {
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
