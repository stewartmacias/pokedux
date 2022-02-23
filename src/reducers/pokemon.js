import { fromJS} from 'immutable';
import { 
    SET_POKEMONS, 
    SET_ERROR, 
    CLEAR_ERROR, 
    TOGGLE_LOADER, 
    SET_FAVORITE 
} from '../actions/types';

const initialState = fromJS({
  list: [],
  loading: false,
  error: '',
});

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
        return state.set('list', fromJS(action.payload));
      //return { ...state, list: action.payload };
    case SET_FAVORITE:
        const currentPokemonIndex = state
            .get('list')
            .findIndex((elem) => elem.get('id') === action.payload.pokemonId);
            const isFavorite = state.getIn(['list', currentPokemonIndex, 'favorite']);
            return state.setIn(['list', currentPokemonIndex, 'favorite'], !isFavorite)
    /*case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: '' };
      case TOGGLE_LOADER:
        return { ...state, loading: !state.loading };*/
    default:
      return state;
  }
};