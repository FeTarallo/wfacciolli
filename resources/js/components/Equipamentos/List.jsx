import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
export default class List extends Component {
	constructor(props){
        super(props)
            this.state = {
                numero_serie: '',
                observacao: '',
                tipo_equipamento_id: '',
                setor_id: '',
                equipamentos: []
            }
	
		// this.handleFieldChange = this.handleFieldChange.bind(this)
		// this.onSubmit = this.onSubmit.bind(this)
        
	}

    componentWillMount() {
        axios
        .get('../api/equipamentos', {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            console.log(response.data.equipamentos)
            this.setState({ 
                equipamentos: response.data.equipamentos
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
                <div className="card-header">Equipamentos</div>
                <div className="col-md-3 mt-4">
                <Link className='btn btn-success' to='/equipamentos/create'>Novo</Link>
                </div>
                <div className="card-body">
                <div className="table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Numero de Serie</th>
                            <th scope="col">Setor</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>   
                    {this.state.equipamentos.map( equipamento => (
                        <tr key={equipamento.id}>
                            <td>{equipamento.numero_serie}</td>
                            <td>{equipamento.setor_id}</td>
                            
                            <td> <Link className="btn btn-warning btn-sm mr-2 text-white" to={`/equipamentos/${equipamento.id}`} >Editar</Link></td>
                               {/* <td> <button type="button" className={equipamento.deleted_at ? 'btn btn-success btn-sm text-white' : 'btn btn-danger btn-sm text-white'} 
                                onClick={() => this._deleteequipamento(equipamento.id)}>{equipamento.deleted_at ? 'Ativar' : 'Deletar' }</button>
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