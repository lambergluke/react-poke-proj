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


const card = (
    
  <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          sprite
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          name: {pokemonObject.name}
        </Typography>

        <Typography variant="body2">
          other info
        </Typography>
      </CardContent>
  </React.Fragment>
)


function App() {
  const [pokemonName, setPokemonName] = useState("");

  return(
    <div className='App-header'>
      <input
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
        />
      <Button variant="contained" onClick={() => pokemonData(pokemonName)}>
        Pokemon
      </Button>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <p>
        
      </p>
    </div>

  )
  
}

export default App;
