import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledLoginPageButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
`

export default function LoginPage() {
    const history = useHistory()
    const [form, setForm] = useState({email:'', password:''})

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input
                    placeholder={'E-mail'}
                    type={'email'}
                    name={'email'}
                    value={form.email}
                    onChange={(e) => {setForm(e.target.value)}}
                    required
                />
                <input
                    placeholder={'Password'}
                    type={'password'}
                    name={'password'}
                    value={form.password}
                    onChange={(e) => {setForm(e.target.value)}}
                    required
                />
            </form>
            <StyledLoginPageButton>
                <button onClick={() => {history.goBack()}}>Voltar</button>
                <button>Entrar</button>
            </StyledLoginPageButton>
        </div>
    )
}