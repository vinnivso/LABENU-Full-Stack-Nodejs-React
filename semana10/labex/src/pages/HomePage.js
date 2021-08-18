import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledHomePageButton = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`
export default function HomePage() {
    const history = useHistory()
    return (
        <div>
            <h1>LABEX</h1>
            <StyledHomePageButton>
                <button onClick={() => {history.push('/list-trips')}}>Ver Viagens</button>
                <button onClick={() => {history.push('/login')}}>Área de Admin</button>
            </StyledHomePageButton>
        </div>
    )
}
