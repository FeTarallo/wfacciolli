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
            console.log(response)
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

           <div className="card mt-4">
                <div className="card-header">Equipamentos</div>
                <div className="col-md-3 mt-4">
                <Link className='btn btn-success mr-4 ' to='/equipamentos/create'>Novo</Link>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Tipo</Button>
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
                    {this.state.equipamentos.map(equipamento => (
                        <tr key={equipamento.id}>
                            <td>{equipamento.numero_serie}</td>
                            <td>{equipamento.setor_id}</td>
                            
                            <td> <Link className="btn btn-warning btn-sm mr-2 text-white" to={`/equipamentos/${equipamento.id}`} >Editar</Link>
                             <button type="button" className={equipamento.deleted_at ? 'btn btn-success btn-sm text-white' : 'btn btn-danger btn-sm text-white'} 
                                onClick={() => this._deleteEquipamento(equipamento.id)}>{equipamento.deleted_at ? 'Ativar' : 'Desativar' }</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div> 
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
                <Button variant="secondary" onClick={this.handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={this.onSubmit}>
                    Salvar
                </Button>
                </Modal.Footer>
         </Modal>
        </div>
      )
	}
}