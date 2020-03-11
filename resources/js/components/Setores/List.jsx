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
                nome_setor:'',
                setores: [],
                total: 1,
                per_page: 1,
                current_page: 1,
                show: false
            }
	
            this._deleteSetor = this._deleteSetor.bind(this)
            this.handlePageChange = this.handlePageChange.bind(this)

            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);

            this.handleFieldChange = this.handleFieldChange.bind(this)
		    this.onSubmit = this.onSubmit.bind(this)
    }
    handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
        
    }

    onSubmit(e){
		e.preventDefault()

		const { history } = this.props

		const setor = {
            nome: this.state.nome_setor
		}
		
		axios.post('../api/setores',
			{
                nome: setor.nome
			},
			{
				headers: { 'Content-Type': 'application/json' }
			}
		)
		.then(response => {
			//localStorage.setItem('usertoken', response.data.token)
			
			history.push(`/setores/`)
		})
		.catch(err => {
            console.log(err)
		})


     }

    componentWillMount() {
        axios
        .get('../api/setores', {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            this.setState({ 
                setores: response.data.setores.data,
                current_page: response.data.setores.current_page,
                per_page: response.data.setores.per_page,
                total: response.data.setores.total
             })
             this.handlePageChange(this.state.current_page)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handlePageChange(pageNumber) {
        axios.get('../api/setores?page='+pageNumber, {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        })
        .then(response => {
            this.setState({ 
                setores: response.data.setores.data,
                current_page: response.data.setores.current_page,
                per_page: response.data.setores.per_page,
                total: response.data.setores.total
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    _deleteSetor (setor){
        axios.delete('api/setores/'+setor, {
            headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` }
        }).then((res) => {
            location.reload()   
        })
    }
	
	render() {
      return (
        <div className="container">

           <div className="card mt-4">
                <div className="card-header">Setores</div>
                <div className="col-md-3 mt-4">
                <Button onClick={this.handleShow}>Novo</Button>
                </div>
                <div className="card-body">
                <div className="table-responsive mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>   
                    {this.state.setores.map(setor => (
                        <tr key={setor.id}>
                            <td>{setor.nome}</td>
                            
                            <td> <Link className="btn btn-warning btn-sm mr-2 text-white" to={`/setores/${setor.id}`} >Editar</Link>
                            <button type="button" className={setor.deleted_at ? 'btn btn-success btn-sm text-white' : 'btn btn-danger btn-sm text-white'} 
                                onClick={() => this._deleteSetor(setor.id)}>{setor.deleted_at ? 'Ativar' : 'Desativar' }</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div> 
                <Pagination activePage={this.state.current_page} itemsCountPerPage={this.state.per_page} totalItemsCount={this.state.total} onChange={this.handlePageChange} itemClass="page-item" linkClass="page-link" />
                </div>
           </div>
            {/* ////// CREATE /////// */}
           <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Novo Setor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
               <form onSubmit={this.onSubmit}>                   
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="nome_setor" value={this.state.nome_setor} onChange={this.handleFieldChange}  />
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