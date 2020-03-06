import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from './Layout/Layout'
import Login from './Auth/Login'
//DASHBOARD
import Dashboard from './Dashboard/Dashboard'
// EQUIPAMENTOS
import Equiapamentos from  './Equipamentos/List'
import EquiapamentosCreate from './Equipamentos/Create'
import EquiapamentosEdit from './Equipamentos/Edit'
// EQUIPAMENTOS
import Veiculos from  './Veiculos/List'
import VeiculosCreate from './Veiculos/Create'
import VeiculosEdit from './Veiculos/Edit'

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
          
          <RouteWithLayout layout={Layout} path="/dashboard/" exact component={Dashboard} />

          <RouteWithLayout layout={Layout} path="/equipamentos/" exact component={Equiapamentos} />
          <RouteWithLayout layout={Layout} path="/equipamentos/create" exact component={EquiapamentosCreate} />
          <RouteWithLayout layout={Layout} path="/equipamentos/edit" exact component={EquiapamentosEdit} />
      
          <RouteWithLayout layout={Layout} path="/veiculos/" exact component={Veiculos} />
          <RouteWithLayout layout={Layout} path="/veiculos/create" exact component={VeiculosCreate} />
          <RouteWithLayout layout={Layout} path="/veiculos/edit" exact component={VeiculosEdit} />
        </Switch>
      </Router>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'))