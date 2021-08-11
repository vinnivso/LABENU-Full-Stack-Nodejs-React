import React, {useEffect, useState} from 'react'
import axios from 'axios'

// At this moment, we have to establish props to this functional component. Why? The PokeCard receives inputs from other, he is a child compared to App.js. In this case, he will receive some kind of data from App.js.
const PokeCard = (props) => {
  const [pokemon, SetPokemon] = useState({})

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(res => {
        // Keep the infos about pokemons in state.
        SetPokemon(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() =>{
    pegaPokemon(props.pokemon)
  },[props.pokemon])
  //The dependencies array auto verify if the information have been changed, and if the value was changed he'll execute what is in useEffect.In this case, PegaPokemon(props.pokemon)

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}
export default PokeCard