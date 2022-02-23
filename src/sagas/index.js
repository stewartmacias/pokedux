import { call, put, takeEvery } from 'redux-saga/effects';
import { setPokemons } from '../actions';
import { FETCH_POKEMONS } from '../actions/types';
import { getPokemonsWithDetails } from '../api/getPokemons';

function* fetchPokemonWithDetails(action) {
    try {
        const pokemonsWithDetails = yield call(getPokemonsWithDetails);
        yield put(setPokemons(pokemonsWithDetails));
    }catch(e) {
        console.log(e);
    }
}

function* pokemonSaga() {
    yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails)
}

export default pokemonSaga;