import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Dashboard from './containers/Dashboard'
import SearchView from './containers/SearchView'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <Route exact 
                  path='/'
                  component={Dashboard}
          />
          <Route 
                  path='/search'
                  component={SearchView}
          />
      </div>
    )
  }
}

export default BooksApp
