import React,{useState, useEffect} from 'react'
import {Typography, Button, List, ListItem, ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledListTripsPage = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`
const StyledListTripsPageButton = styled.div`
    display:grid;
    grid-auto-flow:column;
    // Comportamento padrão é crescimento em row.
    gap:20px;
`

export default function ListTripsPage() {
    const [trips, setTrips] = useState([])
    useEffect(()=> {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-oliveira-lovelace/trips')
        .then(res => {setTrips(res.data.trips)})
    },[])
    return(
        <StyledListTripsPage>
            <Typography variant="h2" align={'center'} gutterBottom>Available Trips</Typography>
            <StyledListTripsPageButton>
                <Link to={'/admin-create-trip'}>
                    <Button variant={'outlined'} color={'primary'}>Create a Trip</Button>
                </Link>
            </StyledListTripsPageButton>
            <List component={'nav'}>
                {trips && trips.map(element => {return <Link to={'/admin-trip-details'}>
                        <ListItem button>
                            <ListItemText info={element} primary={element.name}/>
                        </ListItem>
                    </Link>
                })}
            </List>
        </StyledListTripsPage>
    )
}