import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled, {createGlobalStyle} from 'styled-components'
import PageHome from './pages/PageHome'
import PageMatch from './pages/PageMatch'
//Testar depois PageHome e PageMatch com export default para evitar a criação de componentes em arquivos avulsos.
//Não esquecer do MATERIAL-UI, assim como foi feito no template do FIGMA

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }
`
export default function App(){
  const [currentPage, setCurrentPage] = useState('PageHome')

  //Função que será utilizada para realizar a troca de tela conforme o click no botão, detalhe: Repare que os "sets" estão invertidos, ou seja, se estiver na Home quero que me retorne a página de matches e vice-versa.
  const changePage = () => {
    currentPage === 'PageHome'? setCurrentPage('PageMatch') : setCurrentPage('PageHome')
  }
  const cleanMatch = () => {
    //Será utilizando para limpar o campo de match na aplicação
    axios
    .put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-oliveira-lovelace/clear"
    )
    .then((res) => {
      alert(`As suas paqueras foram limpas com ${res.data.message}o.`);
    });
  }
  return(
  <div>
    <GlobalStyle/>
    {/* Renderização Condicional */}
    {currentPage ==='PageHome'?<PageHome/> : <PageMatch/>}
    <button onClick={changePage}>{currentPage === 'PageHome'? 'Ir para Matches' : 'Ir para Início'}</button>
    {/* Inserir a função cleanMatch na linha abaixo */}
    <button onClick={cleanMatch}>Adeus as paqueras!</button>
  </div>
  )
}