import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './Header'
import Login from './Auth/Login'
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPopper } from '@popperjs/core'

function RouteWithLayout({layout, component, ...rest}){
  return (
    <Route {...rest} render={(props) =>
      React.createElement( layout, props, React.createElement(component, props))
    }/>
  );
}


class App extends Component {
  render () {
    return (
        <Router>
        <Switch>
          <Route path="/" exact component={localStorage.getItem('user_id') ? Redirect : Login} />
          {/* <Route path="/profile" exact component={Profile} /> */}
          {/* <RouteWithLayout layout={Layout} path="/customers" exact component={Customer} />
   */}
        </Switch>
      </Router>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'))