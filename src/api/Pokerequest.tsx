import React from 'react';
import Axios from "axios";


    export const pokemonObject = {
        name: "",
        sprite: "",
        types: [],
    };

    export var pokemonData = async (pokemonName: any) => {
        return await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
            return{
                name: response.data.name,
                sprite: response.data.sprites.front_default,
                types: response.data.types[0].type.name
            }
        })
    }

    export const pokedexData = () => {
        Axios.get("https://pokeapi.co/api/v2/pokedex/kanto").then((response) => {console.log(response.data.region)})
      return (
        {pokedexData}
      );
    }

//export default Apirequest;