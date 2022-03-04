import React from 'react';
import Axios from "axios";


    export const pokemonObject = {
        name: "",
        sprite: "",
        types: [],
    };

    export const pokemonData = async (pokemonName: any) => {
        await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
            pokemonObject.name = response.data.name;
            pokemonObject.sprite = response.data.sprites[5];
            pokemonObject.types = response.data.types;
            console.log(pokemonObject.name)
        })
        //return (
        //pokemonObject
        //);
    }

    export const pokedexData = () => {
        Axios.get("https://pokeapi.co/api/v2/pokedex/kanto").then((response) => {console.log(response.data.region)})
      return (
        {pokedexData}
      );
    }

//export default Apirequest;