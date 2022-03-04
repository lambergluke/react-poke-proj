import React from 'react';
import { useState } from "react";
import './App.css';
import { pokemonData,pokemonObject } from './api/Pokerequest'
import { pokedexData } from './api/Pokerequest';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';



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
          <Typography variant="h5" component="div">
            sprite
          </Typography>
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

  return(
    <div className='App-header'>
      <input
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
        />
      <Button variant="contained" onClick={() => pokemonData(pokemonName).then((obj) => {
            setPokemon({
              name:obj.name,
              sprite:obj.sprite,
              type:obj.types
            })
          }
        )
      }>
        Pokemon
      </Button>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <p>
        {pokemon.name}
      </p>
    </div>

  )
}

export default App;
