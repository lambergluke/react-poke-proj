import { Grid, Typography, FormControlLabel, Switch, Box, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React from "react";
import ControlledSwitches from './ShinySwitch'

function card(pokemon: any) {
    return(
        <React.Fragment>
            <CardContent>
              <Grid textAlign="center">
                <img src={pokemon.sprite} />
                <Typography variant="h5" component="div">
                  {pokemon.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {pokemon.type}
                </Typography>
                <ControlledSwitches />
              </Grid>
              
            </CardContent>
        </React.Fragment>
    )
  }

  function cardBox(pokeName: string,pokemonInfo: any) {
    if (pokeName === 'default-value' || pokeName === "") {
      return(
        <h1>
        </h1>
      )
    } return(
        <h1>
          <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card(pokemonInfo)}</Card>
          
          </Box>
        </h1>
    )
  }

export default cardBox;
