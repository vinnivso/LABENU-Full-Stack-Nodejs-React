import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import LoginPage from './pages/LoginPage'
import TripDetailsPage from './pages/TripDetailsPage'
import CreateTripPage from './pages/CreateTripPage'
import ErrorPage from './pages/ErrorPage'
import styled, { createGlobalStyle} from 'styled-components'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
//O import dessa Lib foi necessária para fazer com que o component KeyboardDatePicker, presente em CreateTripPage, funcione.


// @import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');
// font-family: 'Allison', cursive;
//Utilizar essa fonte depois, não esquecer!

const GlobalStyle = createGlobalStyle`
  html,body {
  display:flex;
  flex-direction:column;
  align-items: center;
  padding:20px;
  }
  body {
    background: linear-gradient(-45deg, #3494E6, #EC6EAD);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
  a {
    text-decoration:none;
  }
`
export default function App() {
  return(
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {/* Sempre que tiver esses providers é bacana colocar direto no App.js já, para facilitar sua vida e evitar de fazer o import deles todo o momento que forem necessário. */}
      <GlobalStyle/>
        <Switch>
          <Route exact path={'/'}>
            <HomePage/>
          </Route>
          <Route exact path={'/list-trips'}>
            <ListTripsPage/>
          </Route>
          <Route exact path={'/application-form'}>
            <ApplicationFormPage/>
          </Route>
          <Route exact path={'/login'}>
            <LoginPage/>
          </Route>
          <Route exact path={'/admin-trip-details'}>
            <TripDetailsPage/>
          </Route>
          <Route exact path={'/admin-create-trip'}>
            <CreateTripPage/>
          </Route>
          <Route>
            <ErrorPage/>
          </Route>
        </Switch>
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  )
}