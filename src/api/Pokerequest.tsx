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
            pokemonName=String(pokemonName).toLowerCase()
            return await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
                console.log(response.data.name)
                console.log(response.data.sprites.front_default)
                console.log(response.data.types[0].type.name)
                console.log(response.data.sprites.front_shiny)
                return{
                    name: validateToken(response.data.name || 'default-value'),
                    spriteNormal: response.data.sprites.front_default,
                    types: response.data.types[0].type.name,
                    spriteShiny: response.data.sprites.front_shiny
                }
            })
        } catch(error) {
            console.log("Couldn't find pokemon")
            return{
                name: 'default-value',
                spriteNormal: 'default-value',
                types: 'default-value',
                spriteShiny: 'default-value'
            }
        }    
    }


//export default Apirequest;