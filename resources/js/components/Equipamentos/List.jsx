import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default class List extends Component {
	constructor(props, context){
        super(props, context)
            this.state = {
                nome: '',
                nome_tipo: '',
                numero_serie: '',
                observacao: '',
                tipo_equipamento_id: '',
                setor_id: '',
                equipamentos: [],
                setores: [],
                total: 1,
                per_page: 1,
                current_page: 1,
                show: false
            }
	
            this._deleteEquipamento = this._deleteEquipamento.bind(this)
            this.handlePageChange = this.handlePageChange.bind(this)

            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);

            this.handleFieldChange = this.handleFieldChange.bind(this)
		    this.onSubmit = this.onSubmit.bind(this)
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
	}

    onSubmit(e){
		e.preventDefault()

		const { history } = this.props

		const tipoEquipamento = {
            nome: this.state.nome_tipo
		}
		
		axios.post('../api/tipo-equipamento',
			{
                nome: tipoEquipamento.nome
			},
			{
				headers: { 'Content-Type': 'application/json' }
			}
		)
		.then(response => {
			//localStorage.setItem('usertoken', response.data.token)
			
			history.push(`/equipamentos/`)
		})
		.catch(err => {
            console.log(err)
		})


     }

    componentWillMount() {
        axios
        .get('../api/equipamentos', {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            this.setState({ 
                equipamentos: response.data.equipamentos.data,
                current_page: response.data.equipamentos.current_page,
                per_page: response.data.equipamentos.per_page,
                total: response.data.equipamentos.total
             })
             this.handlePageChange(this.state.current_page)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handlePageChange(pageNumber) {
        axios.get('../api/equipamentos?page='+pageNumber, {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            this.setState({ 
                equipamentos: response.data.equipamentos.data,
                current_page: response.data.equipamentos.current_page,
                per_page: response.data.equipamentos.per_page,
                total: response.data.equipamentos.total
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    _deleteEquipamento(equipamento){
        axios.delete('api/equipamentos/'+equipamento, {
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
                    Equipamentos
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
                                <Link className='btn btn-success mr-2' to='/equipamentos/create'>Novo Equipamento</Link>
                                <Button onClick={this.handleShow}>Novo Tipo</Button>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="ativos-tab" data-toggle="tab" href="#ativos" role="tab" aria-controls="ativos" aria-selected="true">Equipamentos cadastrados</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="ativos" role="tabpanel"></div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr className="table-secondary table-style">
                                    <th scope="col">Número de série</th>
                                    <th scope="col">Setor</th>
                                    <th scope="col">Tipo Equipamento</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>   
                                {this.state.equipamentos.map(equipamento => (
                                    <tr key={equipamento.id}>
                                        <td>{equipamento.numero_serie}</td>
                                        <td>{equipamento.setores}</td>
                                        <td>{equipamento.tipo_equipamentos}</td>
                                        <td> 
                                            <Link className="btn btn-warning btn-sm mr-2 text-white" to={`/equipamentos/${equipamento.id}`} >Editar</Link>
                                            <button type="button" className={equipamento.deleted_at ? 'btn btn-success btn-sm text-white' : 'btn btn-danger btn-sm text-white'} 
                                            onClick={() => this._deleteEquipamento(equipamento.id)}>{equipamento.deleted_at ? 'Ativar' : 'Desativar' }</button>
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
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tipo Equipamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.onSubmit}>                   
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Nome</label>
                                <input type="text" className="form-control" name="nome_tipo" value={this.state.nome_tipo} onChange={this.handleFieldChange}  />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={this.onSubmit}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
      )
	}
}