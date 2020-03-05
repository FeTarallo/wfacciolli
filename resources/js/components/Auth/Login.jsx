import React, { Component } from 'react' 
import '../../css/Auth/login.css'

export default class Login extends Component {
	constructor(props){
        super(props)
            this.state = {
                email: '',
                password: ''
            }
	
		this.handleFieldChange = this.handleFieldChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
        
	}

	handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
	}
	
	onSubmit(e){
		e.preventDefault()

		const { history } = this.props

		const user = {
			email: this.state.email,
			password: this.state.password
		}
		
		axios.post('api/login',
			{
				email: user.email,
				password: user.password
			},
			{
				headers: { 'Content-Type': 'application/json' }
			}
		)
		.then(response => {
			localStorage.setItem('usertoken', response.data.token)
			
			console.log('logado')
		})
		.catch(err => {
			this.setState({
				show: true,
				modalTitle: 'Houve um erro ao fazer login',
				modalBody: 'Essas credenciais não correspondem aos nossos registros.',
				modalClose: () => {this.setState({show:false})}
			})
		})


    }
	
	
	render() {
      return (
        <div className="login-container">
			  <div className="login-box">
				  <div className="login-logo"></div>
				  <div className="login-form">
					  <form onSubmit={this.onSubmit}>
						  <div className="form-group">
						    <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleFieldChange}  placeholder="Email"/>
						  </div>
						  <div className="form-group">
						    <input type="password" className="form-control" id="password" name="password" value={this.state.password}  onChange={this.handleFieldChange} placeholder="Senha"/>
						  </div>
						  <div className="display-form">
							  <button className="btn btn-dark">Logar</button>
							  <a href="">Esqueceu a senha?</a>
						  </div>
						</form>
				  </div>
			  </div>
        </div>
      )
	}
}