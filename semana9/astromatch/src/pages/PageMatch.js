import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
//Não esquecer do MATERIAL-UI, assim como foi feito no template do FIGMA
const MatchDiv = styled.div`
    display: flex;
    border:1px solid black;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    padding: 25px;
    margin: 2.5%;
`
const MatchImg = styled.img`
    width:10vw;
    heigth:10vw;
    border-radius: 30px;
    margin-right:2%;
`
export function Match(props) {
    return (
        <MatchDiv>
            <MatchImg src={props.photo}/>
            <h2>{props.name}</h2>
        </MatchDiv>
    )
}

const PageMatchDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PageMatchProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45vw;
    border: 1px solid black;
    padding: 25px;
    margin: 2.5%;
    button {
        height:5vh;
        width: 5vw;
    }
`
export default function PageMatch(){
    const [matches, setMatches] = useState([])

    const getMatches = () => {
    }
    return (
        <PageMatchDiv>
            <PageMatchProfile>
                <Match />
            </PageMatchProfile>
        </PageMatchDiv>
    )
}