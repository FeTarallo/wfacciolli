import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
export default class List extends Component {
	constructor(props){
        super(props)
            this.state = {
                nome: '',
                placa: '',
                numero: '',
                observaocao: '',
                setor_id: '',
                veiculos: []
            }
	
		// this.handleFieldChange = this.handleFieldChange.bind(this)
		// this.onSubmit = this.onSubmit.bind(this)
        
	}

    componentWillMount() {
        axios
        .get('../api/veiculos', {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            this.setState({ 
                veiculos: response.data.veiculos
             })
             //this.handlePageChange(this.state.current_page)
        })
        .catch(err => {
            console.log(err)
        })
    }
	
	render() {
      return (
        <div className="container">

           <div className="card mt-4">
                <div className="card-header">Veiculos</div>
                <div className="col-md-3 mt-4">
                <Link className='btn btn-success' to='/veiculos/create'>Novo</Link>
                </div>
                <div className="card-body">
                <div className="table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Placa</th>
                            <th scope="col">Setor</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>   
                    {this.state.veiculos.map( veiculo => (
                        <tr key={veiculo.id}>
                            <td>{veiculo.nome}</td>
                            <td>{veiculo.placa}</td>
                            <td>{veiculo.setor_id}</td>
                            
                            <td> <Link className="btn btn-warning btn-sm mr-2 text-white" to={`/veiculo/${veiculo.id}`} >Editar</Link></td>
                               {/* <td> <button type="button" className={veiculo.deleted_at ? 'btn btn-success btn-sm text-white' : 'btn btn-danger btn-sm text-white'} 
                                onClick={() => this._deleteveiculo(veiculo.id)}>{veiculo.deleted_at ? 'Ativar' : 'Deletar' }</button>
                            </td> */}
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div> 
                </div>
           </div>
        </div>
      )
	}
}