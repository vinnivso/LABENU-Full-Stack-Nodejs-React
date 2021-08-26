//Essa página foi refeita após ver a solução do Darvas, gostei muito da forma com que ele trabalhou com os imports do Material-UI, nunca usei o Material-UI atrelado com funcionalidades, somente e meramente de design.
import React from 'react'
import {Typography, List, ListItem, ListItemText, Card, CardContent, ListItemSecondaryAction, IconButton} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import styled from 'styled-components'

const StyledTripDetailsPage = styled.div`
    display:flex;
    grid-auto-flow:column;
    grid-template-colums: repeat(2,1fr);
    gap: 60px;
    button {
        gap:20px;
    }
`

export default function TripDetailsPage(props) {
    return(
        <div>
            <Typography variant="h1" align={'center'} gutterBottom>Trip Details</Typography>
            <StyledTripDetailsPage>
                <Card>
                    <CardContent>
                        <Typography variant={'h5'} gutterBottom>
                            More Info about the Trip
                        </Typography>
                        <Typography variant={'body1'}>
                            <strong>InfoName</strong>:Info
                        </Typography>
                        <Typography variant={'body1'}>
                            <strong>InfoPlaneta</strong>:Info
                        </Typography>
                        <Typography variant={'body1'}>
                            <strong>InfoData</strong>:Info
                        </Typography>
                        <Typography variant={'body1'}>
                            <strong>InfoDescrição</strong>:Info
                        </Typography>
                        <Typography variant={'body1'}>
                            <strong>InfoDuraçãoEmDias</strong>:Info
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant={'h5'} gutterBottom>
                            Info about the Candidate
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary={'Candidate 1'}/>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <ThumbUpIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <ThumbDownIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </StyledTripDetailsPage>
        </div>
    )
}