// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPopper } from '@popperjs/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Layout from './Layout/Layout'
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
class App extends Component {
  render () {
    return (
      <BrowserRouter>
          <Layout
            
          />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))