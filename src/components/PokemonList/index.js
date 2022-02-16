import React from 'react';
import { Grid } from 'semantic-ui-react';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const pokemons = Array(20).fill('');
    console.log("🚀 ~ file: index.js ~ line 6 ~ PokemonList ~ pokemons", pokemons)

    return (
        <Grid className='PokemonList'>
            {pokemons.map(pokemon => 
                <PokemonCard /> 
            )}
        </Grid>
    )
}

export default PokemonList;