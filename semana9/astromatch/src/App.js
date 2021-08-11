import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }
`
export default function App(props) {
  return(
  <div>
    <GlobalStyle/>
  </div>)
}