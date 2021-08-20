import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const StyledLoginPageButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
`
export default function LoginPage() {
    const history = useHistory()
    const [form, setForm] = useState({email:'', password:''})
    //Criação do hook para manipulação do form, repare que estou usando as propriedades como objeto, além de estabelecer um padrão para ficar parecido com API.
    const submit = (e) => {
        e.preventDefault()
        setForm({name:'', password:''})
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={submit}>
            {/* Ao submeter, será executada a seguinte função. */}
                <input
                    placeholder={'Informe seu e-mail'}
                    name={'email'}
                    //O name precisa ser exatamente igual com a declaração realizada no state, assim como a declaração no state é igual o da API.
                    type={'email'}
                    value={form.email}
                    onChange={(e) => {setForm({...form, [e.target.name]:e.target.value})}}
                    //Bem parecido com a sintaxe de desestruturação de objeto. Estou realizando uma cópia do estado anterior do form e passando o valor que deve ser assumido em um respectivo campo, com base na propriedade 'name', do próprio INPUT, FORM.
                    // onChange={(e) => { const {name, value} = e.target.value; setForm({...form,[name]:value})}}
                    // //Poderia ser reescrito dessa maneira, caso fosse aplicado o conceito de desestruturação de objeto.Tal desestruturação encontra-se comentada acima atra´ves da declaração de variável 'const {name,value}'.Repare em um detalhe adicional, Para que a função corresponde, é necessário você inserir ';', logo após a declaração da variável.
                    required
                    // Estabelecido como campo requerido para submit.
                />
                <input
                    placeholder={'Informe sua senha'}
                    name={'password'}
                    //O name precisa ser exatamente igual com a declaração realizada no state, assim como a declaração no state é igual o da API.
                    type={'password'}
                    value={form.password}
                    onChange={(e) => {setForm({...form, [e.target.name]:e.target.value})}}
                    //Bem parecido com a sintaxe de desestruturação de objeto. Estou realizando uma cópia do estado anterior do form e passando o valor que deve ser assumido em um respectivo campo, com base na propriedade 'name', do próprio INPUT, FORM.
                    // onChange={(e) => { const {name, value} = e.target.value; setForm({...form,[name]:value})}}
                    // //Poderia ser reescrito dessa maneira, caso fosse aplicado o conceito de desestruturação de objeto.Tal desestruturação encontra-se comentada acima atra´ves da declaração de variável 'const {name,value}'.Repare em um detalhe adicional, Para que a função corresponde, é necessário você inserir ';', logo após a declaração da variável.
                    required
                    // Estabelecido como campo requerido para submit.
                />
                <StyledLoginPageButton>
                    <button onClick={() => {history.goBack()}}>Voltar</button>
                    <button type={'submit'} name={'submit'}>Entrar</button>
                </StyledLoginPageButton>
            </form>
        </div>
    )
}