import React from 'react';
import { useState } from "react";
import './App.css';
import { pokemonData } from './api/Pokerequest'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import CssTextField from './Components/CssTextField'
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import cardBox from './Components/PokeCard';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    sprite:"",
    type:""
  });

  var getData = () => pokemonData(pokemonName).then((obj) => {
    setPokemon({
        name:obj.name,
        sprite:obj.sprite,
        type:obj.types
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
        {tBox(pokemon.name)}
        <Button 
          variant="contained" 
          onClick={getData}
          color="primary"
        >
          Get Info
        </Button>
        {cardBox(pokemon.name,pokemon)}
        
      </div>
    
  )
}

export default App;
