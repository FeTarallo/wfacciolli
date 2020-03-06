import React, { Component } from 'react' 

export default class Create extends Component {
	constructor(props){
        super(props)
            this.state = {
                numero_serie: '',
                observacao: '',
                tipo_equipamento_id: '',
                setor_id: ''
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

		const equipamento = {
            numero_serie: this.state.numero_serie,
            observacao: this.state.observacao,
            tipo_equipamento_id: this.state.tipo_equipamento_id,
            setor_id: this.state.setor_id
		}
		
		axios.post('../api/equipamentos',
			{
                numero_serie: equipamento.numero_serie,
                observacao: equipamento.observacao,
                tipo_equipamento_id: equipamento.tipo_equipamento_id,
                setor_id: equipamento.setor_id
			},
			{
				headers: { 'Content-Type': 'application/json' }
			}
		)
		.then(response => {
			localStorage.setItem('usertoken', response.data.token)
			
			history.push(`/dashboard/`)
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
        <div className="container">
           <div className="card mt-4">
                <div className="card-header">Cadastro Equipamentos</div>
                <div className="card-body">
                <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Numero de Serie</label>
                        <input type="text" className="form-control" name="numero_serie" value={this.state.numero_serie} onChange={this.handleFieldChange}  />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Tipo Equipamento</label>
                        <input type="text" className="form-control" name="tipo_equipamento_id" value={this.state.tipo_equipamento_id} onChange={this.handleFieldChange}  />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label>Setor</label>
                        <input type="text" className="form-control" name="setor_id" value={this.state.setor_id} onChange={this.handleFieldChange}  />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label>Observação</label>
                        <textarea className="form-control" name="observacao" rows="3" value={this.state.observacao} onChange={this.handleFieldChange} ></textarea>
                    </div>
                </div>
                <button className="btn btn-success">Enviar</button>
            </form>
                </div>
           </div>
        </div>
      )
	}
}