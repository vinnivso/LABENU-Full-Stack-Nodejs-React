import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const StyledApplicationFormPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
`

const StyledApplicationFormPageButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
`

export default function ApplicationFormPage() {
    const history = useHistory()
    const [applicationForm, setApplicationForm] = useState({name:'', age:'', applicationText:'', profession:'', country:''})
    const countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    return (
        <StyledApplicationFormPage>
            <h1>Inscreva-se para uma viagem</h1>
            <form onSubmit={''}>
            {/* Chamar função para ser realizada no submit. */}
            {/* Você pode setar defaultValue, como "estado inicial" para o value no campo de select, como demonstrado no seguinte link:https://stackoverflow.com/questions/44786669/warning-use-the-defaultvalue-or-value-props-on-select-instead-of-setting */}
                <select name={'the-chosen-one'} defaultValue={''} onChange={''} required>
                    <option value={''} disabled>Escolha uma viagem</option>
                </select>
                <input
                    placeholder={'Informe seu Nome'}
                    type={'text'}
                    name={'name'}
                    value={applicationForm.name}
                    pattern={'^.{3,}'}
                    // Estabelecido o mínimo de caracteres com 3 dígitos para nome
                    required title='Mínimo de 3 caracteres'
                    onChange={(e)=>{setApplicationForm(e.target.value)}}
                    required
                    // Estabelecido o campo como requerido.
                />
                <input
                    placeholder={'Informe sua idade'}
                    type={'number'}
                    name={'age'}
                    value={applicationForm.age}
                    onChange={(e)=>{setApplicationForm(e.target.value)}}
                    min={18}
                    // Estabelece o mínimo para início da contagem, no caso inicia em 18
                    required
                    // Estabelecido o campo como requerido.
                />
                <input
                    placeholder={'Texto de Candidatura'}
                    type={'text'}
                    name={'applicationText'}
                    value={applicationForm.applicationText}
                    onChange={(e)=>{setApplicationForm(e.target.value)}}
                    pattern={'^.{30,}'}
                    // Estabelecido o mínimo de caracteres com 30 dígitos para o campo do texto de aplicação
                    required title='Mínimo de 30 caracteres'
                    required
                    // Estabelecido o campo como requerido.
                />
                <input
                    placeholder={'Informe a profissão'}
                    type={'text'}
                    name={'profession'}
                    value={applicationForm.profession}
                    onChange={(e)=>{setApplicationForm(e.target.value)}}
                    pattern={'^.{10,}'}
                    // Estabelecido o mínimo de caracteres com 30 dígitos para o campo do texto de aplicação
                    required title='Mínimo de 10 caracteres'
                    required
                />
                <select defaultValue={''} value={applicationForm.country} onChange={(e)=>{setApplicationForm(e.target.value)}} required>
                    <option value={''} disabled>Informe um país</option>
                    {countryList.map(element => { return <option value={element} key={element}>{element}</option>})}
                </select>
                <StyledApplicationFormPageButton>
                    <button onClick={() => {history.goBack()}}>Voltar</button>
                    <button type={'submit'} name={'submit'} value={'submit'}>Entrar</button>
                </StyledApplicationFormPageButton>
            </form>
        </StyledApplicationFormPage>
    )
}