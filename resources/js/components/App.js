// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Auth/Login'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
          <Login/>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))