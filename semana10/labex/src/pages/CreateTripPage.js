import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledCreateTripPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
`
const StyledCreateTripPageButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 20px 0 0 0;
`

export default function CreateTripPage() {
    const history = useHistory()
    const [newTrip,setNewTrip] = useState({name:'', planet:'', date:'', description:'',durationInDays:''})
    const planetList = ["Mercúrio","Vênus","Terra","Marte","Jupiter","Saturno","Urano","Netuno","Plutão"]
    const fullDateNonConverted = new Date()
    const fullDateConverted = fullDateNonConverted.getFullYear() + '-' +('0' + (fullDateNonConverted.getMonth() + 1)).substr(-2) + '-' + ('0' + fullDateNonConverted.getDate()).substr(-2)

    return (
        <StyledCreateTripPage>
            <h1>CRIAR VIAGEM</h1>
            <form onSubmit={''}>
            {/* Chamar função para ser realizada no submit. */}
            {/* Você pode setar defaultValue, como "estado inicial" para o value no campo de select, como demonstrado no seguinte link:https://stackoverflow.com/questions/44786669/warning-use-the-defaultvalue-or-value-props-on-select-instead-of-setting */}
                <input
                    placeholder={'Informe o nome da Trip'}
                    name={'name'}
                    type={'text'}
                    patter={'^.{5,}$'}
                    // Estabelecido o mínimo de caracteres com 5 dígitos para nome
                    required title='Mínimo de 5 caracteres'
                    value={newTrip.name}
                    onChange={(e) => {setNewTrip(e.target.value)}}
                    required
                    // Estabelecido o campo como requerido.
                />
                <select name={'Planet'} defaultValue={''} onChange={(e) => {setNewTrip(e.target.value)}} required>
                    <option value={''} disabled>Insira um planeta de sua escolha</option>
                    {planetList.map(element => { return <option value={element} key={element}>{element}</option>})}
                </select>
                <input
                    name={'date'}
                    type={'date'}
                    value={newTrip.date}
                    onChange={(e) => {setNewTrip(e.target.value)}}
                    min={fullDateConverted}
                    // Estabelecer o min de Date para com a data atual.
                    required
                />
                <input
                    placeholder={'Informe uma descrição'}
                    name={'description'}
                    type={'text'}
                    pattern={'^.{30,}$'}
                    required title={'Descrição deve conter no mínimo 30 caracteres'}
                    value={newTrip.description}
                    onChange={(e) => {setNewTrip(e.target.value)}}
                    required
                />
                <input
                    placeholder={'Informe o tempo de duração em dias'}
                    name={'Duration'}
                    type={'number'}
                    value={newTrip.durationInDays}
                    onChange={(e) => {setNewTrip(e.target.value)}}
                    min={50}
                    required
                />
                <StyledCreateTripPageButton>
                    <button onClick={() => {history.goBack()}}>Voltar</button>
                    <button type={'submit'}>Criar</button>
                </StyledCreateTripPageButton>
            </form>
        </StyledCreateTripPage>
    )
}