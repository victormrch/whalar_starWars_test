import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import characterDetailsReducer from './characterDetailsReducer';
import filmsReducer from './filmsReducer';

export default combineReducers({
	characters: charactersReducer,
	characterDetails: characterDetailsReducer,
	films: filmsReducer,
});
