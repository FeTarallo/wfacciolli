import React from 'react'
import header from '../../css/Layout/header.css'
import sidebar from '../../css/Layout/sidebar.css'
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

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
         dep: "",
         sidebarOpen: true
      }
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
   }
   
   onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
   }

	render() {
      return (
         <div className="layout-container">
            <div className="header-container">
               <div className="header-logo"></div>
               <div className="header-title">
   				   <p className="title-dep-style">Departamento: {this.props.dep}</p>
   			   </div>
   			   <div className="header-menu">
                  <div className="header-dropdown">
                     <Dropdown as={ButtonGroup}>
                        <Button variant="light" size="sm">Sair</Button>
                        <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                           <Dropdown.Item href="#/action-1">Sair</Dropdown.Item>
                           <Dropdown.Item href="#/action-2">Meus dados</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
               </div>
            </div>
            <div className="sidebar-container">
               <div className="sidebar-content">
                  
                  <hr/>
                  <div className="sidebar-menu">
                  <Sidebar
                     sidebar={
                        <div className="sidebar-header">
                           <div className="user-pic">
                              <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture"/>
                           </div>
                           <div className="user-info">
                              <span className="user-name">
                                 <strong>Nome da pessoa</strong>
                              </span>
                              <span className="user-role">
                                 Departamento
                              </span>
                           </div>
                        </div>
                     }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white"} }}
                  >
                  <div className="icon-container">
                     <FontAwesomeIcon icon={faThList} onClick={() => this.onSetSidebarOpen(true)} style={{color: "white"}}></FontAwesomeIcon>
                  </div>
                  </Sidebar>
                  </div>
               </div>
            </div>
         </div>
      )
	}
}