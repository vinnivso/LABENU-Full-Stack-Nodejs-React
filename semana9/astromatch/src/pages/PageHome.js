import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
//Não esquecer do MATERIAL-UI, assim como foi feito no template do FIGMA.

const PageHomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PageHomeProfile = styled.div`
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
const PageHomeImg = styled.img`
    width: 25vw;
    height:50vh;
`

export default function PageHome(){
    //Declaração do estado inicial
    const [profile, setProfile] = useState({})

    //Função para pegar os perfis, seguindo os parâmetros da API.
    const getProfileToChoose = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-oliveira-lovelace/person')
        .then(res => {setProfile(res.data.profile)})
        .catch(err => {alert(err.response.data.message)});
    }

    const choosePerson = (element) => {
        element.name === 'nein'? ():()
    }

    //Exibição dos dados na página, em f(término de seu Load).
    useEffect(()=> {getProfileToChoose()}, [])



    return (
    <div>
        <PageHomeDiv>
            <PageHomeProfile>
                <PageHomeImg src={profile.photo}/>
                <h2>{profile.name}, {profile.age} anos</h2>
                <p>{profile.bio}</p>
                <div>
                    <button name='nein'onClick={choosePerson}>❌</button>
                    <button name='gut'onClick={choosePerson}>💘</button>
                </div>
            </PageHomeProfile>
        </PageHomeDiv>
    </div>
    )
}