import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from 'axios'

export default function App() {
  const [poke, setPoke] = useState({pokeList:[],pokeName:''})

  const changePokeName = (e) => {
    setPoke(poke => ({...poke, pokeName:e.target.value}))
  }
  return (
    <div></div>
  )
}