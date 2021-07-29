import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const pagePai = styled.div`
  margin:0;
  padding:0;
`
export default class Registro extends React.Component {
  state = {name:'',email:''}

  inputName = (e) => {
    this.setState({name:e.target.value})
  }
  inputEmail = (e) => {
    this.setState({email:e.target.value})
  }
  createUser = () => {
    const body = {name:this.state.name, email:this.state.email}
  }
  render() {
    return(
      <pagePai>
        <header><button>Ir para página com a lista de Usuários</button></header>
        <main>
          <p><strong>Nome:</strong><input
          value={this.state.name}
          onChange={this.state.inputName}
          placeholder="Digite nome para cadastro"/></p>
          <p><strong>E-mail:</strong><input
          value={this.state.email}
          onChange={this.state.inputEmail}
          placeholder="Digite email para cadastro"/></p>
        </main>
      </pagePai>
    )
  }
}