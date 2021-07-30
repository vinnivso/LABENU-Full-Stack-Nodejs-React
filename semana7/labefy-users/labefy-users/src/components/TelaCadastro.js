import React from 'react'
import axios from 'axios'
//Sempre em um componente de classe, devemos colocar this.props, caso desejamos pegar algo denominado no Pai

export default class TelaCadastro extends React.Component {
    //Criando state inicial pra depois vincular mudança de estado com base nos inputs do usuários.
    state = {name:'', email:''}
    //Função para armazenar os valores inseridos pelo usuário no campo de input para email atribuído.
    handleName = (e) => {
        this.setState({name:e.target.value})
    }
    //Função para armazenar os valores inseridos pelo usuário no campo de input para nome atribuído.
    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }
    //Função para realizar a criação efetiva do Cadastro
    fazerCadastro = () => {
        // Criando os "parâmetros" atribuídos no backend para criação de novo usuário, porém nesse caso atribuindo a url, body e headers em consts.
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {name:'', email:''}
        //Passando o axios com a url, body e headers definidas anteriormente, porém atribuídas em variáveis. OBS.: O ideal seria não deixar o headers em uma variável e sim colocar ela direto nos parâmetros no axios.post
        axios.post(url, body, {headers:{Authorization:'vinicius-oliveira-lovelace'}})
        //Em caso de sucesso o cadastro do usuário, será retonado a requisição abaixo:
        .then(res => {alert('Usuário(a) cadastrado(a) com sucesso!')})
        this.setState({name:'', email:''})
        //Em caso de erro o cadastro do usuário, será retonado seguindo a requisição abaixo:
        .catch(err => {alert(err.response.data.message)})
    }


    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de usuários</button>
                <h2>Cadastro</h2>
                {/* Sempre que utilizar o input controlado, deve-se utilizar o value e onChange para demonstrar os caracteres no campo de input */}
                <input
                placeholder={'Nome'}
                // Perceba que o value está com "this.state.name", lembrando que o motivo do "this" é pelo fato de que estamos trabalhando com uma componente de classe.
                value={this.state.name}
                // Ao utilizar o onChange estamos chamando a função handleName, atribuindo o "this".
                onChange={this.handleName}
                />
                <input
                placeholder={'E-mail'}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button>Cadastrar</button>
            </div>
        )
    }
}