import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

export default class List extends Component {
	constructor(props){
        super(props)
            this.state = {
                nome: '',
                placa: '',
                numero: '',
                observaocao: '',
                setor_id: '',
                veiculos: [],
                total: 1,
                per_page: 1,
                current_page: 1,
                show: false,
                modalBody: '',
                modalTitle: '',
                modalClose: () => {}
            }
	
            this._deleteVeiculo = this._deleteVeiculo.bind(this)
            this.handlePageChange = this.handlePageChange.bind(this)
        
	}

    componentWillMount() {
        axios
        .get('../api/veiculos', {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            this.setState({ 
                veiculos: response.data.veiculos.data,
                current_page: response.data.veiculos.current_page,
                per_page: response.data.veiculos.per_page,
                total: response.data.veiculos.total
             })
             this.handlePageChange(this.state.current_page)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    handlePageChange(pageNumber) {
        axios.get('../api/veiculos?page='+pageNumber, {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            console.log(response)
            this.setState({ 
                veiculos: response.data.veiculos.data,
                current_page: response.data.veiculos.current_page,
                per_page: response.data.veiculos.per_page,
                total: response.data.veiculos.total
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    _deleteVeiculo(veiculo){
        axios.delete('api/veiculos/'+veiculo, {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        }).then((res) => {
            location.reload()
            this.setState({
                show: true,
                modalTitle: res.data.status,
                modalClose: () => {this.setState({show:false}, location.reload())}
            })    
        })
    }

	render() {
      return (
        <div className="container">
            <div className="card mt-4 mb-4">
                <div className="card-header text-center">
                    Veículos
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <form id="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input id="search-input" className="form-control" type="text" name="pesquisa" />
                                        <i id="search-button" className="btn btn-success fa fa-search ml-2 search" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="text-right">
                            <Link className='btn btn-success' to='/veiculos/create'>Novo Veículo</Link>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="ativos-tab" data-toggle="tab" href="#ativos" role="tab" aria-controls="ativos" aria-selected="true">Veículos cadastrados</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="ativos" role="tabpanel"></div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr className="table-secondary table-style">
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
                                    <td>{veiculo.setores}</td>
                                    <td> 
                                        <Link className="btn btn-warning btn-sm mr-2 text-white" to={`/veiculo/${veiculo.id}`} >Editar</Link>
                                        <button type="button" className={veiculo.deleted_at ? 'btn btn-success btn-sm text-white' : 'btn btn-danger btn-sm text-white'} 
                                        onClick={() => this._deleteVeiculo(veiculo.id)}>{veiculo.deleted_at ? 'Ativar' : 'Desativar' }</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div> 
                </div>
                <div className="card-footer">
                    <Pagination activePage={this.state.current_page} itemsCountPerPage={this.state.per_page} totalItemsCount={this.state.total} onChange={this.handlePageChange} itemClass="page-item" linkClass="page-link" />
                </div>
           </div>
        </div>
      )
	}
}