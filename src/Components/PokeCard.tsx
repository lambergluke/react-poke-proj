import { Grid, Typography, FormControlLabel, Switch, Box, Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React from "react";
import ControlledSwitches from './ShinySwitch'
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from 'recoil';
import useSwitch from "./ShinySwitch";

function PokeCard(props: any/* pokeName: string,pokemonInfo: any */) {

  const {render, checked} = useSwitch()

  if (props.pokeName === 'default-value' || props.pokeName === "") {
    return(
      <h1>
      </h1>
    )
  } return(
      <h1>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <React.Fragment>
                <CardContent>
                  <Grid textAlign="center">
                     <img src={!checked ? props.pokemonInfo.spriteNormal : props.pokemonInfo.spriteShiny} /> 
                    <Typography variant="h5" component="div">
                      {props.pokemonInfo.pokeName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {props.pokemonInfo.type}
                    </Typography>
                      {render}
                  </Grid>
                </CardContent>
            </React.Fragment>
          </Card>
        </Box>
      </h1>
    )
  }

export default PokeCard;
