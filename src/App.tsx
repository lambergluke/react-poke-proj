import React from 'react';
import { useState } from "react";
import './App.css';
import { pokemonData } from './api/Pokerequest'
import Button from '@mui/material/Button';
import PokeCard from './Components/PokeCard';
import useInputBox from './Components/InputField'

function App() {

  const [pokemon, setPokemon] = useState({
      pokeName: "",
      spriteNormal:"",
      type:"",
      spriteShiny:""
  });
  const {value, renderTextBox} = useInputBox(pokemon.pokeName)
  var getData = () => pokemonData(value).then((obj) => {
    setPokemon({
        pokeName:obj.name,
        spriteNormal:obj.spriteNormal,
        type:obj.types,
        spriteShiny:obj.spriteShiny
      })
    }
  )

  return(
      <div className='App-header'>
        <h1>
          Pokemon Lookup
        </h1>
        {/* {tBox(pokemon.pokeName)} */}
        {renderTextBox}
        <Button 
          variant="contained" 
          onClick={getData}
          color="primary"
        >
          Get Info
        </Button>
        {/* {PokeCard(pokemon.pokeName,pokemon)} */}
        <PokeCard pokeName={pokemon.pokeName} pokemonInfo={pokemon}/>
      </div>
  )
}

export default App;
