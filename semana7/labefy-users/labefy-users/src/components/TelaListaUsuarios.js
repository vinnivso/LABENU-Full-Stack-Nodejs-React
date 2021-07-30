import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display:flex;
    justify-content:space-between;
`
//Sempre em um componente de classe, devemos colocar this.props, caso desejamos pegar algo denominado no Pai

export default class TelaListaUsuarios extends React.Component {
    //Criado um STATE inicial somente para armazenar minha lista de usuários, como é inicial, nesse caso é somente para apresentar um estado vazio.
    state = {usuarios:[]}
    //Quero que carregue assim que a tela terminar de carregar, evitando que o conteúdo carregue apenas ao atualizar a página e seja gerado ao clicar em um botão. Para isso utilizamos o componentDidMount. Sendo assim estou dizendo para essa componente, que: Ao carregar a tela, por favor seja executada a função.
    componentDidMount() {
        this.pegarUsuarios()
    }
    //Criando função para pegar todos os usuários, perceba que dessa vez é um GET.
    pegarUsuarios = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        // axios.get(url, {headers:{Authorization:'vinicius-oliveira-lovelace'}})
        // //Guardando a lista no STATE
        // .then(res=>{this.setState({usuarios: res.data})})
        // .catch(err=>{alert('Ocorreu um problema, por favor tente recarregar a página.')})
        try{
            const res = await axios.get(url, {headers:{Authorization:'vinicius-oliveira-lovelace'}})
            this.setState({usuarios:res.data})
        }
        catch(err){alert('Ocorreu um problema, por favor tente recarregar a página.')}
    }
    //Criando função para deletar usuário, lembrando que temos id e o mesmo está sendo atrelado no map abaixo, na função listaUsuarios. Vamos passar o parâmetro ID.
    deletarUsuario = (id) => {
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {headers:{Authorization:'vinicius-oliveira-lovelace'}})
        .then(res=>{
            alert('Usuário deletado(a) com sucesso(a)')
            //Solicitando que carregue a lista após eu excluir usuário.
            this.pegarUsuarios()
        })
        .catch(err=>{alert('ocorreu um erro, tente novamente.')
        })
    }


    render() {
        // Transformando uma lista de objetos em uma lista de cards de usuário.No caso, o melhor é realizando um .map(), pois não estamos realizando nenhum filtro da informação e sim tratando as informações expressas.Aproveitando para criar o botão que será de excluir usuário.
        const listaUsuarios = this.state.usuarios.map(user =>{
            //Atribuido o user.id para segregação única.
            //Aproveitando para incluir a função deletarUsuario para cada user no button.
            return (<CardUsuario key={user.id}>{user.name}<button onClick={()=> this.deletarUsuario(user.id)}>X</button></CardUsuario>)
        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Voltar</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}