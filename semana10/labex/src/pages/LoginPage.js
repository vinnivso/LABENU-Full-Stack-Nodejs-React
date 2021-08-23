import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Typography, Button, TextField} from '@material-ui/core'
import styled from 'styled-components'
import axios from 'axios'

const StyledLoginPageForm = styled.form`
    display:grid;
    // Comportamento padrão é crescimento em row.
    gap:20px;
`

export default function LoginPage() {
    const [form, setForm] = useState({email: '', password: ''})
    const history = useHistory()
    const onSubmitLogin = (e) => {
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-oliveira-lovelace/login', body)
        .then(res => {window.localStorage.setItem('token', res.data.token)})
        // É muito bom colocar o window.localStorage para evitar alguns bugs no React, além disso foi utilizada a função setItem do localStorage, que recebe o parâmetro e guarda o mesmo.No caso, será guardado o token.
        history.push('/list-trips')
    }
    return(
        <div>
            <Typography variant="h2" align={'center'} gutterBottom>Start to Login</Typography>
            <StyledLoginPageForm onSubmit={onSubmitLogin}>
                <TextField helperText={'Please insert your e-mail'}label={'Email'} type={'email'} name={'email'}value={form.email}onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}/>
                <TextField helperText={'Please insert your password'}label={'Password'} type={'password'} name={'password'}value={form.password}onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}/>
                <Button variant={'contained'} color={'primary'} type={'submit'}>Submit</Button>
            </StyledLoginPageForm>
        </div>
    )
}