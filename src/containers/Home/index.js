import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemons } from '../../api/getPokemons';
import { setPokemons, setError } from '../../actions';
import axios from '../../services/axios';
import './styles.css';

function Home() {
  const pokemons = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)))
      })
      .then(pokemonsResponse => {

      const pokemonsData = pokemonsResponse.map(response => response.data);
      dispatch(setPokemons(pokemonsData));
      
          
      })
      .catch((error) => {
        dispatch(setError({ message: 'Ocurrió un error' , error}));
      });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;