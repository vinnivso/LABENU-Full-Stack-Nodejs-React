import React from 'react'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  padding:0;
  margin:0;
  box-sizing: border-box;
`

export default function App(){
  return(
    <GlobalStyle/>
  )
}