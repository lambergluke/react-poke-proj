import React from 'react';
import Axios from "axios";


    export const pokemonObject = {
        name: "",
        sprite: "",
        types: [],
    };

    function validateToken(token: string) {
        return token;
    }

    export var pokemonData = async (pokemonName: any) => {
        try{
            return await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
                console.log(response.data.name)
                console.log(response.data.sprites.front_default)
                console.log(response.data.types[0].type.name)
                return{
                    name: validateToken(response.data.name || 'default-value'),
                    sprite: response.data.sprites.front_default,
                    types: response.data.types[0].type.name
                }
            })
        } catch(error) {
            return{
                name: 'default-value',
                sprite: 'default-value',
                types: 'default-value'
            }
        }    
    }

    export const pokedexData = () => {
        Axios.get("https://pokeapi.co/api/v2/pokedex/kanto").then((response) => {console.log(response.data.region)})
      return (
        {pokedexData}
      );
    }

//export default Apirequest;