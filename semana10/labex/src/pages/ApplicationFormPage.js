import React,{useState, useEffect} from 'react'
import {Typography, Button, TextField, InputLabel, Select, MenuItem, FormControl, FormHelperText} from '@material-ui/core'
import styled from 'styled-components'
import axios from 'axios'

const StyledApplicationFormPageForm = styled.form`
    display:grid;
    gap:20px;
`
export default function ApplicationFormPage() {
    const countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
    //Criado uma array com a lista de países para realização do map de country, essa lista pode ser encontrada na seguinte referência:https://css-tricks.com/snippets/javascript/array-of-country-names/

    const [trips,setTrips] = useState([])
    const [form, setForm] = useState({name:'', age:0, applicationText:'', profession:'', country:'', trip:null})
    //Definido trip:null, porque a viagem vai ser um objeto, assim como é retornado da API naturalmente, sem nenhuma segregação por propriedade.

    useEffect(()=> {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-oliveira-lovelace/trips')
        .then(res => {setTrips(res.data.trips)})
    },[])
    //Toda vez que for necessário tomar uma ação com base na renderização, será necessário aplicarmos o useEffect e passarmos as respectivas ações dentro de seu escopo. Tomar uma ação assim que a tela carregar.

    const onSubmitApplicationForm = (e) => {
        e.preventDefault()
        const body ={name: form.name, age: form.age, applicationText: form.applicationText, profession: form.profession, country: form.country}
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-oliveira-lovelace/trips/${form.trip.id}/apply`, body)
    }

    return(
        <div>
            <Typography variant="h2" align={'center'} gutterBottom>Application Form</Typography>
            <StyledApplicationFormPageForm onSubmit={onSubmitApplicationForm}>
                <TextField helperText={'Please insert your name'}label={'Name'} name={'name'} value={form.name} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}/>
                <TextField helperText={'Please insert your age'}label={'Age'} type={'number'} name={'age'} value={form.age} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}/>
                <TextField helperText={'Please insert your motivation to partipate in this trip'}label={'Application Text'} name={'applicationText'} value={form.applicationText} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}/>
                <TextField helperText={'Please insert your profession'}label={'Profession'} name={'profession'} value={form.profession} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}/>
                <FormControl >
                    <InputLabel id='country-select'>Country</InputLabel>
                    <Select
                    labelId='country-select'
                    name={'country'}
                    value={form.country}
                    onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}
                    >
                    {countryList.map(element => {return <MenuItem key={element}value={element}>{element}</MenuItem>})}
                    </Select>
                    <FormHelperText>Please select your country</FormHelperText>
                </FormControl>
                <FormControl >
                    <InputLabel id='trip-select'>Avaiable Trips</InputLabel>
                    <Select
                    labelId='trip-select'
                    name={'trip'}
                    value={form.trip}
                    onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}
                    >
                    {trips && trips.map(element => {return <MenuItem key={element}value={element}>{element.name}</MenuItem>})}
                    </Select>
                    <FormHelperText>Please select your trip</FormHelperText>
                </FormControl>
                <Button variant={'contained'} color={'primary'} type={'submit'}>Apply to Trip</Button>
            </StyledApplicationFormPageForm>
        </div>
    )
}