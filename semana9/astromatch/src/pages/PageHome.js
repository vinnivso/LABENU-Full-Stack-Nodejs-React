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

    const choosePerson = (action) => {
    }

    //Exibição dos dados na página, em f(término de seu Load).
    useEffect(()=> {getProfileToChoose()}, [])



    return (
    <div>
        <PageHomeDiv>
            {/* Ternário para avaliar se existe perfis ou não. Caso exista, ele exibe os perfis e chama as funções associadas, caso contrário, é exibido uma mensagem "No more manitos(as)." Dessa forma evito o maldito erro do null. */}
            {profile?
            <PageHomeProfile>
                <PageHomeImg src={profile.photo}/>
                <h2>{profile.name}, {profile.age} anos</h2>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={()=>choosePerson(false)}>❌</button>
                    <button onClick={()=>choosePerson(true)}>💘</button>
                </div>
            </PageHomeProfile>
            : <div>No more manitos(as)</div>}
        </PageHomeDiv>
    </div>
    )
}