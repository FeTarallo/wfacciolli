import React from 'react'
import '../../css/Layout/header.css'
// import '../../css/Layout/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList } from '@fortawesome/free-solid-svg-icons'
import { DropdownButton } from 'react-bootstrap'
import { Item } from 'react-bootstrap'
import { Menu } from 'react-bootstrap'
import { Toggle } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap';
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom'

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
         dep: "",
         user_token: null,
         auth_role: '',
         auth_name: '',
         sidebarOpen: false
      }
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
   }
   
   onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
   }

   componentDidMount(){
      this.setState({
          user_token: localStorage.getItem('usertoken')
      })
      
      axios
          .get('../api/auth', {
              headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
          })
          .then(response => {
             this.setState({
               auth_name: response.data.user.nome
             })
          })
          .catch(err => {
              console.log(err)
          })
   }

   logout(){
      localStorage.removeItem('usertoken')
      window.location.replace('/')
    }  

	render() {
      return (
           
               <div className="sidebar-container">
                  <div className="sidebar-content">
                     <div className="sidebar-menu">
                     <Sidebar
                        sidebar={
                           <div className="sidebar-header">
                              <div className="text-dark">
                               <Link className='nav-link active text-dark' to='/dashboard/'><i className="fa fa-bars"></i> Dashboard</Link>
                              </div>
                              <div className="text-dark">
                               <Link className='nav-link active text-dark' to='/dashboard/'><i className="fa fa-user"></i> Meus Dados</Link>
                              </div>
                              <div className="text-dark ml-3 mt-1">
                               <a onClick={this.logout} ><i className="fa fa-sign-out"></i> Sair</a>
                              </div>
                           </div>
                        }
                       open={this.state.sidebarOpen}
                       onSetOpen={this.onSetSidebarOpen}
                       styles={{ sidebar: { background: '#eff0f1', width: 200 } }}
                       docked={true}
                     > 
                     <div className="header-container">
                        <div className="header-logo"></div>
                        <div className="header-title">
                           <p className="title-dep-style">Departamento: {this.props.dep}</p>
                        </div>
                        <div className="header-menu text-white">
                           <p>Olá {this.state.auth_name}</p>
                        </div>
                     </div>
                           {this.props.children}
                     </Sidebar>
                     </div>
                  </div>
               </div>
           
      )
	}
}