import React, { Component } from 'react' 

export default class Create extends Component {
	constructor(props){
        super(props)
            this.state = {
                nome: '',
                placa: '',
                numero: '',
                observacao: '',
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

		const veiculo = {
            nome: this.state.nome,
            numero: this.state.numero,
            observacao: this.state.observacao,
            placa: this.state.placa,
            setor_id: this.state.setor_id
		}
		
		axios.post('../api/veiculos',
			{
                nome: veiculo.nome,
                numero: veiculo.numero,
                observacao: veiculo.observacao,
                placa: veiculo.placa,
                setor_id: veiculo.setor_id
			},
			{
				headers: { 'Content-Type': 'application/json' }
			}
		)
		.then(response => {
			history.push(`/dashboard/`)
		})
		.catch(err => {
			console.log(err)
		})


     }
	
	
	render() {
      return (
        <div className="container">
           <div className="card mt-4">
                <div className="card-header">Cadastro de Veiculos </div>
                <div className="card-body">
                <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Nome</label>
                        <input type="text" className="form-control" name="numero_serie" value={this.state.numero_serie} onChange={this.handleFieldChange}  />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Numero</label>
                        <input type="text" className="form-control" name="tipo_equipamento_id" value={this.state.tipo_equipamento_id} onChange={this.handleFieldChange}  />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Placa</label>
                        <input type="text" className="form-control" name="setor_id" value={this.state.setor_id} onChange={this.handleFieldChange}  />
                    </div>
                    <div className="form-group col-md-6">
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
                <div className="text-right">
                    <button className="btn btn-success">Enviar</button>
                </div>
            </form>
                </div>
           </div>
        </div>
      )
	}
}