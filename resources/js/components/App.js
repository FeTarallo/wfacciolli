import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './Header'
import Login from './Auth/Login'

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