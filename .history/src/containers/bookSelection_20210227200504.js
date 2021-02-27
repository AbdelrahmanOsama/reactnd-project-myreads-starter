import React from 'react'
import '../App.css'

class BookSelection extends React.Component {
    state = {
        selectedValue:this.props.currentState
    }
    handleChange(e) {
        this.setState({ selectedValue: e.target.value });
    }
  render() {
      const { currentState } = this.props;
      const options =[
            {'label':"Move to...",'value':'move', 'disabled':'disabled'},
            {'label':"Currently Reading",'value':'currentlyReading', 'disabled':'enable'},
            {'label':"Want to Read",'value':'wanttoRead', 'disabled':'enable'},
            {'label':"Read",'value':'read', 'disabled':'enable'},
            {'label':"none",'value':'none', 'disabled':'enable'},
        ];
    return (
        <select value={currentState} onChange={this.handleChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
        </select>    
    )
  }
}

export default BookSelection
