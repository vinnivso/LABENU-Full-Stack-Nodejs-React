import React from 'react'
import styled from 'styled-components'

const StyledTripDetailsPageMain = styled.div`
    padding: 10px 20px;
    border-radius: 4px;
    margin: 15px 0;
    max-width: 500px;
`

const StyledTripDetailsPageMinor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const StyledTripDetailsPageButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
`

export default function TripDetailsPage() {
    return (
        <div>Trip Details Page</div>
    )
}