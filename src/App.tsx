import React from 'react';
import { useState } from "react";
import './App.css';
import { pokemonData } from './api/Pokerequest'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssTextField from './Components/CssTextField'
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';
import PokeCard from './Components/PokeCard';

function App() {

  /* const pokemonNameState = atom({
    key: 'pokemonNameState',
    default: ""
  }); */

/*   const pokemonState = atom({
    key: 'pokemonState',
    default:{    
      pokeName: "",
      spriteNormal:"",
      type:"",
      spriteShiny:""}   
  }); */

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
      pokeName: "",
      spriteNormal:"",
      type:"",
      spriteShiny:""
  });

  var getData = () => pokemonData(pokemonName).then((obj) => {
    setPokemon({
        pokeName:obj.name,
        spriteNormal:obj.spriteNormal,
        type:obj.types,
        spriteShiny:obj.spriteShiny
      })
    }
  )

  function tBox(pokeName: string) {

    if (pokeName === 'default-value'){
      return(
      <h1 className="App-textbox">
          <TextField 
              color="primary"
              error={true} 
              label="Pokemon Name" 
              helperText="Invalid name entered."
              onChange={(event) => {
                setPokemonName(event.target.value);
                }
              }
              sx={{input: {color: 'white'}}}
          />
      </h1>
        )
    } return(
          <h1 className="App-textbox">
            <CssTextField
                variant="outlined" 
                color="primary"
                error={false} 
                label="Pokemon Name"
                helperText=""
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                onChange={(event) => {
                  setPokemonName(event.target.value);
                  }
                }
                sx={{input: {color: 'white'}}}
            />
          </h1>
      )

  }

  return(
      <div className='App-header'>
        <h1>
          Pokemon Lookup
        </h1>
        {tBox(pokemon.pokeName)}

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
