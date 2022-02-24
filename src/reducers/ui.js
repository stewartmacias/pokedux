import { fromJS} from 'immutable';
import { 
    SET_ERROR, 
    CLEAR_ERROR, 
    TOGGLE_LOADER, 
} from '../actions/types';

const initialState = fromJS({
  loading: false,
  error: '',
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, error: '' };
      case TOGGLE_LOADER:
        return { ...state, loading: !state.loading };
    default:
      return state;
  }
};