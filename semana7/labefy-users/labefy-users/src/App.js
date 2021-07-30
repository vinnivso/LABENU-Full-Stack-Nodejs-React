import React from 'react'
import TelaCadastro from './components/TelaCadastro'
import TelaListaUsuarios from './components/TelaListaUsuarios'


export default class App extends React.Component {
  //Sempre que estiver dentro da classe, é necessário colocar "this.'...'"
  state = {telaAtual:'cadastro'}
  //Função para definir o reconhecimento da tela, com base no state.
  //Foi passado a prop irParaLista e irParaCadastro, porque será elaborado um botão para trocar de página ao clicar.
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'cadastro':
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case 'lista':
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Página não encontrada!</div>
    }
  }
  //Criando função para ir para a tela de Cadastro
  irParaCadastro = () => {
    this.setState({telaAtual:'cadastro'})
  }
  //Criando função para ir para a tela de Lista
  irParaLista = () => {
    this.setState({telaAtual:'lista'})
  }

  render() {
    return (
      <div>{this.escolheTela()}</div>
    )
  }
}
