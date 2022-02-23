import { getPokemons, getPokemonsWithDetails } from '../api/getPokemons';
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, SET_FAVORITE } from './types';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})

export const fetchPokemonsWithDetails = () => async (dispatch) => {
    try {
      dispatch(toggleLoader());
      const response = await getPokemons();
      const pokemons = response.results;
      const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
      dispatch(setPokemons(pokemonsWithDetails));
      dispatch(toggleLoader());
    } catch (error) {
      dispatch(setError({ message: 'Oops! Something went wrong.', error }));
      dispatch(toggleLoader());
    }
  };