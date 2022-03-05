import React from 'react';
import { useState } from "react";
import './App.css';
import { pokemonData } from './api/Pokerequest'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    sprite:"",
    type:""
  });

  var card = (
    
    <React.Fragment>
        <CardContent>
          <img src={pokemon.sprite} />
          <Typography variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            
          </Typography>
  
          <Typography variant="body2">
            {pokemon.type}
          </Typography>
        </CardContent>
    </React.Fragment>
  )

  function tBox(pokeName: string) {
    if (pokeName === 'default-value'){
      return(
      <h1>
        <TextField 
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
        <h1>
          <TextField 
              error={false} 
              label="Pokemon Name" 
              helperText=""
              onChange={(event) => {
                setPokemonName(event.target.value);
                }
              }
          />
        </h1>
      )

  }

  function cardBox(pokeName: string) {
    if (pokeName === 'default-value' || pokeName == undefined) {
      return(
        <h1>
        </h1>
      )
    } return(
        <h1>
          <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
          </Box>
        </h1>
    )
  }

  return(
    <div className='App-header'>
      {tBox(pokemon.name)}
      <Button variant="contained" onClick={() => pokemonData(pokemonName).then((obj) => {
            setPokemon({
              name:obj.name,
              sprite:obj.sprite,
              type:obj.types
            })
          }
        )
      }>
        Get Info
      </Button>
      {cardBox(pokemon.name)}
{/*     <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box> */}
    </div>

  )
}

export default App;
