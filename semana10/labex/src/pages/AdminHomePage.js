import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledAdminHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    h1{
        justify-content: center;
        width: 500px;
    }
`
const StyledAdminHomePageButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
`

export default function AdminHomePage() {
    const history = useHistory()
    return (
        <StyledAdminHomePage>
            <h1>PÁGINA ADMINISTRATIVA</h1>
            <StyledAdminHomePageButton>
                <button onClick={() => {history.goBack()}}>Voltar</button>
                <button onClick={()=> {history.push('/create-trip')}}>Criar Trip</button>
                <button onClick={''}>Logout</button>
            </StyledAdminHomePageButton>
        </StyledAdminHomePage>
    )
}