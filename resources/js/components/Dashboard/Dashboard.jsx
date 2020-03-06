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
              <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Equipamentos</h5>
                        <p class="card-text">Gerenciar equipamentos disponíveis</p>
                        <Link className='btn btn-primary' to='/equipamentos'> Acessar</Link>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Veiculos</h5>
                        <p class="card-text">Gerenciar veiculos disponíveis</p>
                        <Link className='btn btn-primary' to='/veiculos'> Acessar</Link>
                    </div>
                    </div>
                </div>
                </div>
          </div>
        )
      }
}