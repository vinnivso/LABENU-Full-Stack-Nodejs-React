import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './styles.css'
import PokeCard from './components/PokeCard'

const App = () => {
  //State definition with hooks.
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')
  //Instead of to declare state by state, we can attribute all properties within the object, as demonstrated in Yuzo's class (10/08/2021).
  useEffect(() =>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(res => {
      // função que está setando no estado os 151 pokemons
      setPokeList(res.data.results );
    })
    .catch(err => {
      console.log(err);
    });
  }, [])

  const changePokeName = (e) => {
    setPokeName(e.target.value);
  }
  
  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário
      escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}
export default App