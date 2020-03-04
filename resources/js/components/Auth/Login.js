import React from 'react'
import style from '../../css/Auth/login.css'

export default class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			 
		}
	}

	render() {
      return (
        <div className="login-container">
			  <div className="login-box">
				  <div className="login-logo"></div>
				  <div className="login-form">
					  <form id="form-login">
						  <div class="form-group">
						    <input type="email" class="form-control" name="email" placeholder="Email"/>
						  </div>
						  <div class="form-group">
						    <input type="password" class="form-control" name="password" placeholder="Senha"/>
						  </div>
						  <div className="display-form">
							  <button type="submit" class="btn btn-dark">Logar</button>
							  <a href="">Esqueceu a senha?</a>
						  </div>
						</form>
				  </div>
			  </div>
        </div>
      )
	}
}