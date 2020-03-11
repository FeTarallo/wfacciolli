import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

export default class Login extends Component {

    constructor(props){
        super(props)
            this.state = {
                user: ''
            }
    }
    
    render() {
        return (
          <div className="container mt-5">
              <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Equipamentos</h5>
                        <p className="card-text">Gerenciar equipamentos disponíveis</p>
                        <Link className='btn btn-primary' to='/equipamentos'> Acessar</Link>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Veiculos</h5>
                        <p className="card-text">Gerenciar veiculos disponíveis</p>
                        <Link className='btn btn-primary' to='/veiculos'> Acessar</Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Setores</h5>
                        <p className="card-text">Gerenciar setores disponíveis</p>
                        <Link className='btn btn-primary' to='/setores/'> Acessar</Link>
                    </div>
                    </div>
                </div>
                {/* <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Veiculos</h5>
                        <p class="card-text">Gerenciar veiculos disponíveis</p>
                        <Link className='btn btn-primary' to='/veiculos'> Acessar</Link>
                    </div>
                    </div>
                </div> */}
                </div>
          </div>
        )
      }
}