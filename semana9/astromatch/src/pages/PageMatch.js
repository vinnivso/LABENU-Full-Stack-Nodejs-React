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
export function Match() {
    return (
        <MatchDiv>
            <MatchImg src={'https://s2.glbimg.com/7xoebpLbauWR-QHroHyZbWN3eQU=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/o/J/ACA4X8T9Gb5zwJ6pCZRA/2020-03-03-gemera.jpg'}/>
            <h2>Carrito Manito</h2>
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
    return (
        <PageMatchDiv>
            <PageMatchProfile>
                <Match/>
            </PageMatchProfile>
        </PageMatchDiv>
    )
}