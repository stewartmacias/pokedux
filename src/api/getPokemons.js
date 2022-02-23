import axios from '../services/axios';

export const getPokemons = (limit = 151) =>
  axios
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));


export const getPokemonsWithDetails = () => {
    return getPokemons()
        .then((res) => {
            const pokemonList = res.results;
            return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)))
        })
        .then((pokemonResponse) => {
            const pokemonsData = pokemonResponse.map((response) => response.data);
            return pokemonsData;
        });        
}