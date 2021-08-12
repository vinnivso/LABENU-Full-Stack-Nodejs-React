import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled, {createGlobalStyle} from 'styled-components'
import { PageHome } from './pages/PageHome'
import {PageMatch} from './pages/PageMatch'
//Não esquecer do MATERIAL-UI, assim como foi feito no template do FIGMA

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }
`
export default function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  //Lembrar de criar o vínculo dessa alteração com base no "Accept" do usuário, seguindo o respectivo Match.
  const changePage = (e) => {
    if(e.target.innerHTML === 'Home'){
      setCurrentPage('Home')
    }
    else {
      setCurrentPage('PageMatch')
    }
  }
  //Renderização Condicional de tela.
  const renderPage = () => {
    if(currentPage === 'Home') {
      return (<PageHome/>)
    }
    else if (currentPage === 'Match') {
      return (<PageMatch/>)
    }
    else {
      return (<div>Oxi painho, deu ruim!</div>)
    }
  }
  return(
  <div>
    <GlobalStyle/>
    {renderPage()}
  </div>
  )
}