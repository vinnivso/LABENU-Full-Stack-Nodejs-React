import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ListTripsPage from './pages/ListTripsPage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import LoginPage from './pages/LoginPage'
import AdminHomePage from './pages/AdminHomePage'
import TripDetailsPage from './pages/TripDetailsPage'
import CreateTripPage from './pages/CreateTripPage'
import ErrorPage from './pages/ErrorPage'
import styled,{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body {
  overflow-x:hidden;
  box-sizing: border-box;
  width: 100%;
  height:100%;
}

body {
    background: linear-gradient(-45deg, #740001, #ae0001, #eeba30, #d3a625, #000000);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    margin: 0 auto;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
}

button {
  margin-bottom: 15px;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: slategray;
  min-width: 100px;

  &:hover{
    cursor: pointer;
    background-color: #b6d4e3;
  }
}

input {
  width: 100%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0 0 15px 0;
}

select {
  width: 518px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0 0 15px 0;
}

h1, h2, b {
  color: slategray;
}

h1 {
  width:300px;
  justify-content:center;
  text-align: center;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}

h2 {
  text-align: center;

  font-family: Open-Sans, Helvetica, Sans-Serif;
}

p {
  color: #394145;
  font-family: Open-Sans, Helvetica, Sans-Serif;
}
`
export default function App() {
  return(
    <BrowserRouter>
    <GlobalStyle/>
    {/* O GlobalStyle criado, só pode ser definido entre BrowserRouter e o próprio Switch, em outra posição a estilização não será aplicada ou o código será quebrado. */}
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
        <Route exact path={'/admin'}>
          <AdminHomePage/>
        </Route>
        <Route exact path={'/trip-details'}>
          <TripDetailsPage/>
        </Route>
        <Route exact path={'/create-trip'}>
          <CreateTripPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}