import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledListTripsPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
`
const StyledListTripsPageButton= styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 50px 0 10px 0;
`

export default function ListTripsPage() {
    const history = useHistory()

    return (
        <StyledListTripsPage>
            <StyledListTripsPageButton>
                <button onClick={() =>{history.goBack()}}>Voltar</button>
                <button onClick={() =>{history.push('/application-form')}}>Inscreva-se</button>
            </StyledListTripsPageButton>
            <h1>Lista de Viagens</h1>
        </StyledListTripsPage>
    )
}