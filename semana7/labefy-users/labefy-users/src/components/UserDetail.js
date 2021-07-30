import React from 'react'
import axos from 'axios'
import styled from 'styled-components'
import axios from 'axios'

class UserDetail extends React.Component {
    state={userDetail:'', userEdition:'editButton',name:'',email:''}

    //Quero que carregue assim que a tela terminar de carregar, evitando que o conteúdo carregue apenas ao atualizar a página e seja gerado ao clicar em um botão.
    componentDidMount() {this.getUserDetails()}
    //Função para levantamento dos detalhes do usuário que serão necessários para aplicarmos uma mudança no cadastro.
    getUserDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
            this.props.userId}`,{headers:{Authorization:'vinicius-oliveira-lovelace'}})
            .then(res => {this.setState({userDetail:res.data})})
            .catch(err => {console.log(err)})
    }
    //Função para trocar os dados do usuário.
    changeUserEditionFiel = () => {
        if(this.state.userEdition === 'editButton'){this.setState({userEdition:'userEditForm'})}
        else{this.setState({userEdition:'editButton'})}
    }
    //Função para guardar a mudança de Nome.
    handleNameChange = e => {
        const newNameValue = e.target.value
        this.setState({name:newNameValue})
    }
    //Função para guardar a mudança de Email.
    handleEmailChange = e => {
        const newEmailValue = e.target.value
        this.setState({email:newEmailValue})
    }
    //Função para guardar a modificação dos inputs no objeto.
    handleCreateUser = () => {
        const body = {name:this.state.name, email:this.state.email}
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`, body, {headers:{Authorization:'vinicius-oliveira-lovelace'}})
        .then(() => {
            this.setState({name:'', email:''})
            this.getUserDetail()
            this.changeUserEditionFiel()
            alert(`Usuário ${this.state.name} editado com sucesso!`)
        })
        .catch(err => {
            alert('Erro ao criar o usuário.')
            console.log(err)
        })
    }

    render() {
        const userEdition = this.state.userEdition === 'editButton'? (<button onClick={this.changeUserEditionFiel}>Editar usuário</button>) :
        (<div>
            <input
                placeholder='Nome'
                type='text'
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            <input
                placeholder='Email'
                type='email'
                value={this.state.email}
                onChange={this.handleEmailChange}
            />
            <button onClick={this.handleCreateUser}>Salvar edição</button>
        </div>)
        return(
            <div>
                <div>
                    <p>{this.state.userDetail.name}</p>
                    <p>{this.state.userDetail.email}</p>
                </div>
                <div>{userEdition}</div>
                <hr/>
                <button onClick={this.props.klkl}/>
            </div>
        )
    }
}